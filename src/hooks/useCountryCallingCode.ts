"use client";

import { useEffect, useState } from "react";

export interface CountryCallingCode {
  code: string;
  country: string;
}

const UNKNOWN_LOCATION: CountryCallingCode = {
  code: "",
  country: "",
};

export function useCountryCallingCode() {
  const [locationData, setLocationData] =
    useState<CountryCallingCode>(UNKNOWN_LOCATION);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);

    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Country detection failed with status ${response.status}`);
        }

        const data = await response.json();
        const code =
          typeof data.country_calling_code === "string"
            ? data.country_calling_code.trim()
            : "";
        const country =
          typeof data.country_name === "string" ? data.country_name.trim() : "";

        if (code && country) {
          setLocationData({ code, country });
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.warn(
          "Country detection failed; the user can enter a full international number instead.",
          error,
        );
      } finally {
        window.clearTimeout(timeout);
      }
    };

    detectCountry();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return locationData;
}

export function formatInternationalPhone(
  rawPhone: string,
  detectedCallingCode: string,
) {
  const trimmed = rawPhone.trim();
  if (!trimmed) return "";

  const digits = trimmed.replace(/\D/g, "");

  // Respect a complete international number entered by the user.
  if (trimmed.startsWith("+")) {
    return digits ? `+${digits}` : "";
  }

  const callingCodeDigits = detectedCallingCode.replace(/\D/g, "");
  if (!callingCodeDigits) {
    // Never assume a country when geolocation is unavailable.
    return digits;
  }

  // Remove the domestic trunk prefix before converting to international format.
  const nationalNumber = digits.replace(/^0+/, "");
  return nationalNumber ? `+${callingCodeDigits}${nationalNumber}` : "";
}

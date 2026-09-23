"use client";

const GA4_MEASUREMENT_ID = "G-J3KX3TZ4F2";
const GOOGLE_ADS_WHATSAPP_SEND_TO =
  "AW-18440732535/PqGrCKXtsoEdEPf-nNlE";

type GoogleAdsWindow = Window & {
  dataLayer?: Array<unknown>;
  gtag?: (...args: unknown[]) => void;
};

export function trackWhatsAppContact(
  location: string,
  page?: string,
) {
  if (typeof window === "undefined") return;

  const target = window as GoogleAdsWindow;
  target.dataLayer = target.dataLayer || [];

  const currentPage = page || window.location.pathname;

  target.dataLayer.push({
    event: "whatsapp_click",
    page: currentPage,
    location,
  });

  // Send a dedicated GA4 event so WhatsApp clicks are visible in Realtime.
  target.gtag?.("event", "whatsapp_click", {
    send_to: GA4_MEASUREMENT_ID,
    page: currentPage,
    location,
  });

  // Keep the existing Google Ads WhatsApp conversion.
  target.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_SEND_TO,
    value: 1,
    currency: "EGP",
  });
}

"use client";

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

  target.dataLayer.push({
    event: "whatsapp_click",
    page: page || window.location.pathname,
    location,
  });

  target.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_SEND_TO,
    value: 1,
    currency: "EGP",
  });
}

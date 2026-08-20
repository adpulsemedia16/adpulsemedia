declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "form_submit"
  | "consultation_cta_click"
  | "free_audit_request"
  | "portfolio_view";

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, any> = {}) {
  try {
    if (typeof window === "undefined") return;

    // Google Analytics 4
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // Meta Pixel
    if (typeof window.fbq === "function") {
      if (eventName === "form_submit" || eventName === "free_audit_request") {
        window.fbq("track", "Lead", params);
      } else if (eventName === "consultation_cta_click" || eventName === "whatsapp_click") {
        window.fbq("track", "Contact", params);
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    }

    // Safe dev log
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] ${eventName}:`, params);
    }
  } catch (err) {
    console.warn("Analytics tracking error:", err);
  }
}

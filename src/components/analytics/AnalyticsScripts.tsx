import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

// Pixel IDs are public identifiers, not secrets. The env var stays supported so the ID can be
// rotated per environment without a code change.
const DEFAULT_PIXEL_ID = "29155674314074371";
const PIXEL_ID =
  (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim() || DEFAULT_PIXEL_ID;
const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim();

type FbqStub = {
  (...args: unknown[]): void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

function loadMetaPixel(pixelId: string) {
  const w = window as unknown as { fbq?: FbqStub; _fbq?: FbqStub };

  if (!w.fbq) {
    const stub = ((...args: unknown[]) => {
      stub.queue.push(args);
    }) as FbqStub;
    stub.queue = [];
    stub.loaded = true;
    stub.version = "2.0";
    w.fbq = stub;
    w._fbq = stub;
  }

  if (!document.getElementById("meta-pixel")) {
    const script = document.createElement("script");
    script.id = "meta-pixel";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  w.fbq("init", pixelId);
  w.fbq("track", "PageView");
}

function loadGoogleAnalytics(measurementId: string) {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer?.push(args);
    };
  }

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  w.gtag("js", new Date());
  w.gtag("config", measurementId, { send_page_view: true });
}

/**
 * Loads advertising and analytics tags only when their public env vars exist,
 * so the site never depends on a tag being configured to function.
 */
export function AnalyticsScripts() {
  const initialised = useRef(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    if (PIXEL_ID) loadMetaPixel(PIXEL_ID);
    if (GA_ID) loadGoogleAnalytics(GA_ID);
  }, []);

  // Client-side navigation does not reload the page, so track it explicitly.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const w = window as unknown as {
      fbq?: (...args: unknown[]) => void;
      gtag?: (...args: unknown[]) => void;
    };
    if (PIXEL_ID) w.fbq?.("track", "PageView");
    if (GA_ID) w.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return null;
}

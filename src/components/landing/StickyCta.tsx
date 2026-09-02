import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "./shared";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
        <div className="border-t border-border bg-background/85 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <p className="hidden text-sm font-semibold sm:block">
            The Retailing Code{" "}
            <span className="text-muted-foreground">| Launch Offer @ ₹2,299</span>
            <span className="ml-2 text-xs font-bold text-ember">(78% OFF)</span>
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 sm:w-auto"
          >
            <span className="sm:hidden">🔥 GET LAUNCH OFFER</span>
            <span className="hidden sm:inline">GET ACCESS →</span>
          </a>
        </div>
      </div>
    </div>
  );
}

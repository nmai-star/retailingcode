import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export const CHECKOUT_URL = "https://tagmango.com/web/checkout/6a91a7c53df99900843bfcca";

export function CheckoutButton({
  children,
  className,
  size = "lg",
  variant = "gold",
}: {
  children: ReactNode;
  className?: string;
  size?: "lg" | "md";
  variant?: "gold" | "outline";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.98]",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm",
        variant === "gold"
          ? "bg-[image:var(--gradient-gold)] text-primary-foreground glow-ring hover:brightness-110 hover:-translate-y-0.5"
          : "border border-border bg-surface text-foreground hover:border-gold/60 hover:text-gold",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-[1.1] font-extrabold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export function CouponCode({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy coupon code ${code}`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl border border-dashed border-gold/50 bg-background/60 px-5 py-3 font-display text-lg font-bold tracking-[0.18em] text-gold transition-colors hover:bg-gold/10",
        className,
      )}
    >
      {code}
      {copied ? (
        <Check className="size-4 text-mint" aria-hidden />
      ) : (
        <Copy className="size-4 opacity-70 group-hover:opacity-100" aria-hidden />
      )}
      <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
    </button>
  );
}

export function FlowChips({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold tracking-wide uppercase">
            {s}
          </span>
          {i < steps.length - 1 && <span className="text-gold/70">→</span>}
        </li>
      ))}
    </ul>
  );
}

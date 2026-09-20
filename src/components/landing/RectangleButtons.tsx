import type { ReactNode } from "react";

type RectangleButtonsProps = {
  children: ReactNode;
  variant: "sliding-text-cta";
};

export function RectangleButtons({ children, variant }: RectangleButtonsProps) {
  if (variant !== "sliding-text-cta") return <>{children}</>;

  return (
    <span className="contents">
      <span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 flex -translate-y-8 transform items-center justify-center font-medium opacity-0 blur-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none"
      >
        {children}
      </span>
    </span>
  );
}
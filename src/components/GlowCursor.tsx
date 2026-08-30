import { useEffect, useRef, useState } from "react";

export function GlowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!hasPointer || isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const animate = () => {
      const ease = 0.12;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.body.addEventListener("mouseenter", handleEnter);
    document.body.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseenter", handleEnter);
      document.body.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      style={{
        width: 520,
        height: 520,
        marginLeft: -260,
        marginTop: -260,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
        willChange: "transform, opacity",
      }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--gold) 18%, transparent) 0%, color-mix(in oklab, var(--ember) 8%, transparent) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

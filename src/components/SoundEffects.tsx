import { useEffect } from "react";

/**
 * Subtle UI sound design: a soft click on buttons/links and a light
 * "swoosh" while scrolling. Sounds are synthesised with the Web Audio API
 * (no extra assets) and stay silent until the visitor interacts, so they
 * never fight with browser autoplay rules.
 */
export function SoundEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: AudioContext | null = null;
    const getCtx = () => {
      if (!ctx) ctx = new AudioCtx();
      if (ctx.state === "suspended") void ctx.resume();
      return ctx;
    };

    const tone = (
      freq: number,
      duration: number,
      gainValue: number,
      type: OscillatorType = "sine",
      endFreq?: number,
    ) => {
      const audio = getCtx();
      const now = audio.currentTime;
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain).connect(audio.destination);
      osc.start(now);
      osc.stop(now + duration + 0.02);
    };

    const onPointerDown = (event: Event) => {
      const el = event.target as HTMLElement | null;
      if (!el?.closest) return;
      const hit = el.closest("button, a, [role='button']");
      if (!hit) return;
      tone(680, 0.09, 0.05, "triangle", 1180);
    };

    const onPointerOver = (event: Event) => {
      const el = event.target as HTMLElement | null;
      if (!el?.closest) return;
      const hit = el.closest("button, a, [role='button']");
      if (!hit || !ctx) return;
      tone(920, 0.055, 0.016, "sine");
    };

    let lastScroll = 0;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (!ctx) return; // stay silent until the first interaction
      const now = performance.now();
      const delta = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      if (now - lastScroll < 420 || delta < 60) return;
      lastScroll = now;
      tone(320, 0.16, 0.012, "sine", 180);
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("pointerover", onPointerOver, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerover", onPointerOver, true);
      window.removeEventListener("scroll", onScroll);
      void ctx?.close();
    };
  }, []);

  return null;
}

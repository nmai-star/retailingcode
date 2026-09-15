# Autoplay-Blocked Fallback: Pulsing "Enable Sound" Cue

## Current state
`src/components/BackgroundMusic.tsx` already tries to start the music on load and falls back to starting it on the visitor's first tap/click/keypress anywhere on the page. Today, when a browser blocks autoplay, the button looks identical to the normal "Music Off" state — visitors get no hint that sound is available.

## Change
When autoplay is blocked, make the existing floating music button invite the visitor:

- Add a `needsUnlock` state, set to true when the initial `play()` promise rejects (and the user hasn't muted).
- While `needsUnlock` is true:
  - The button label reads **"Tap for sound"** instead of "Music Off".
  - A gold pulsing ring (`animate-ping` style) animates behind the speaker icon.
  - The button border/glow gets a gentle attention animation.
- Clear `needsUnlock` as soon as music starts — whether via the global first-tap/keypress listener (already implemented) or via the button itself.
- Respect reduced motion: apply `motion-reduce:animate-none` to the pulse so it stays still for visitors who prefer reduced motion.

## Technical details
- Only `src/components/BackgroundMusic.tsx` changes — no new files, no asset changes, no impact on design, branding, or other sections.
- All colors stay on the existing semantic tokens (`gold`, `background`, `surface`); no hardcoded colors.
- Keep the existing behaviors intact: auto-start on load, global tap/keypress unlock, pause-while-video-plays, and the on/off toggle.
- Edge cases handled:
  - If the visitor turns music off, `needsUnlock` stays cleared — no pulsing after an explicit off.
  - If the video-pause-resume `play()` also fails, set `needsUnlock` there too so the cue reappears.
  - The `aria-label` reflects the cue state so screen readers hear the invitation.

## Verification
- Playwright: block/force a failed initial `play()` and confirm the button shows the pulsing "Tap for sound" state, then starts and the cue clears on click.
- Desktop and mobile screenshots; confirm the build is healthy.

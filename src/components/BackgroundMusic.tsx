import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

import musicAsset from "@/assets/uplifting-drive-loop.mp3.asset.json";
import { Button } from "@/components/ui/button";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userMutedRef = useRef(false);
  const videoPlayingRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;

    const tryPlay = () => {
      if (userMutedRef.current || videoPlayingRef.current > 0) return;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    // Try to start the music as soon as the page loads. Browsers that block
    // autoplay with sound will fall back to the first tap/click/keypress.
    tryPlay();
    const unlock = () => {
      tryPlay();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    // Pause the music while any video on the page is playing.
    const onVideoPlay = (event: Event) => {
      if (!(event.target instanceof HTMLVideoElement)) return;
      videoPlayingRef.current += 1;
      audio.pause();
      setIsPlaying(false);
    };
    const onVideoStop = (event: Event) => {
      if (!(event.target instanceof HTMLVideoElement)) return;
      videoPlayingRef.current = Math.max(0, videoPlayingRef.current - 1);
      if (videoPlayingRef.current === 0 && !userMutedRef.current) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };
    document.addEventListener("play", onVideoPlay, true);
    document.addEventListener("pause", onVideoStop, true);
    document.addEventListener("ended", onVideoStop, true);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      document.removeEventListener("play", onVideoPlay, true);
      document.removeEventListener("pause", onVideoStop, true);
      document.removeEventListener("ended", onVideoStop, true);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      userMutedRef.current = true;
      audio.pause();
      setIsPlaying(false);
      return;
    }

    userMutedRef.current = false;
    if (videoPlayingRef.current > 0) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed right-3 bottom-20 z-[60] sm:right-5 sm:bottom-24">
      <audio ref={audioRef} src={musicAsset.url} loop preload="auto" aria-hidden="true" />
      <Button
        type="button"
        variant="outline"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn background music off" : "Turn background music on"}
        aria-pressed={isPlaying}
        className="h-11 gap-2 rounded-full border-gold/40 bg-background/90 px-3 text-foreground shadow-lg backdrop-blur-xl hover:border-gold/70 hover:bg-surface sm:px-4"
      >
        <span className="relative flex size-6 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Music2 className={isPlaying ? "animate-pulse" : ""} aria-hidden="true" />
        </span>
        <span className="text-xs font-bold">Music {isPlaying ? "On" : "Off"}</span>
        {isPlaying ? (
          <Volume2 className="text-gold" aria-hidden="true" />
        ) : (
          <VolumeX className="text-muted-foreground" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}

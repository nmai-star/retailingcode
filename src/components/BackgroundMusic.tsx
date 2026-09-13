import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

import musicAsset from "@/assets/uplifting-drive-loop.mp3.asset.json";
import { Button } from "@/components/ui/button";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed right-3 bottom-20 z-[60] sm:right-5 sm:bottom-24">
      <audio ref={audioRef} src={musicAsset.url} loop preload="none" aria-hidden="true" />
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
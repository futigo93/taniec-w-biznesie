"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

type ArticleAudioPlayerProps = {
  src: string;
  title?: string;
  description?: string;
};

const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 1.75, 2];

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const resolveDuration = (audio: HTMLAudioElement) => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    return audio.duration;
  }

  if (audio.seekable.length > 0) {
    const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
    if (Number.isFinite(seekableEnd) && seekableEnd > 0) {
      return seekableEnd;
    }
  }

  return 0;
};

export function ArticleAudioPlayer({
  src,
  title = "Ten artykuł jest dostępny także w wersji audio",
  description = "Możesz go odsłuchać bez wychodzenia ze strony.",
}: ArticleAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const handleSpeedChange = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = value;
    setPlaybackRate(value);
  };

  const handleVolumeChange = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = value;
    setVolume(value);
  };

  const syncDuration = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(resolveDuration(audio));
  };

  const timelineMax = duration > 0 ? duration : Math.max(currentTime, 0);

  return (
    <div className="rounded-3xl border border-primary/45 bg-gradient-to-br from-primary/18 via-card to-card p-5 shadow-lg shadow-primary/10">
      <audio
        ref={audioRef}
        preload="metadata"
        src={src}
        onLoadedMetadata={syncDuration}
        onDurationChange={syncDuration}
        onCanPlay={syncDuration}
        onProgress={syncDuration}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime);
          if (!duration) {
            setDuration(resolveDuration(event.currentTarget));
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Audioarticle</p>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-primary/25 bg-background p-4 shadow-sm shadow-black/10">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={togglePlayback}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90"
              aria-label={isPlaying ? "Pauza" : "Odtwórz"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
            </button>

            <div className="min-w-0 flex-1">
              <input
                type="range"
                min={0}
                max={timelineMax}
                step={0.1}
                value={Math.min(currentTime, timelineMax)}
                onChange={(event) => handleSeek(Number(event.target.value))}
                className="h-2 w-full cursor-pointer accent-primary"
                aria-label="Postęp odtwarzania"
              />
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="flex items-center gap-2 text-sm text-foreground">
              <span className="font-medium">Szybkość</span>
              <select
                value={playbackRate}
                onChange={(event) => handleSpeedChange(Number(event.target.value))}
                className="rounded-xl border border-border bg-background px-3 py-2 text-sm"
                aria-label="Szybkość odtwarzania"
              >
                {PLAYBACK_SPEEDS.map((speed) => (
                  <option key={speed} value={speed}>
                    {speed}x
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3 text-sm text-foreground md:min-w-64">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(event) => handleVolumeChange(Number(event.target.value))}
                className="h-2 w-full cursor-pointer accent-primary"
                aria-label="Głośność"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

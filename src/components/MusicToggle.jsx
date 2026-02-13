import { useEffect, useRef } from "react";

export default function MusicToggle({ src = "/romantic.mp3" }) {
  const audioRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let fadeTimer = null;

    const fadeIn = () => {
      audio.volume = 0;
      let v = 0;
      fadeTimer = window.setInterval(() => {
        v += 0.02;               // speed of fade
        audio.volume = Math.min(v, 0.35); // final volume
        if (audio.volume >= 0.35) {
          window.clearInterval(fadeTimer);
          fadeTimer = null;
        }
      }, 120);
    };

    const startMusic = () => {
      if (started.current) return;

      audio.play().then(fadeIn).catch(() => {});
      started.current = true;

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
      if (fadeTimer) window.clearInterval(fadeTimer);
    };
  }, [src]);

  return <audio ref={audioRef} src={src} loop preload="auto" />;
}

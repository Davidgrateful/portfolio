import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';
import { usePhase } from '../hooks/usePhase';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isWeb3 } = usePhase();

  const web2Music = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";
  const web3Music = "https://cdn.pixabay.com/audio/2026/02/20/audio_91db1f3017.mp3";
  const currentSource = isWeb3 ? web3Music : web2Music;

  // Handle Autoplay on Interaction
  useEffect(() => {
    const startAutoplay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.warn("Autoplay still blocked:", err));
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', startAutoplay);
      window.removeEventListener('keydown', startAutoplay);
      window.removeEventListener('click', startAutoplay);
    };

    window.addEventListener('pointerdown', startAutoplay);
    window.addEventListener('keydown', startAutoplay);
    window.addEventListener('click', startAutoplay);

    return cleanupListeners;
  }, []); // Only on mount

  // Sync source and handle ducking
  useEffect(() => {
    const handleDuck = () => { if (audioRef.current) audioRef.current.volume = 0.05; };
    const handleUnduck = () => { if (audioRef.current) audioRef.current.volume = 0.3; };

    window.addEventListener('music-duck', handleDuck);
    window.addEventListener('music-unduck', handleUnduck);

    if (audioRef.current) {
      // If source changes, update it and preserve state
      if (audioRef.current.src !== currentSource) {
        const wasPlaying = !audioRef.current.paused;
        audioRef.current.src = currentSource;
        audioRef.current.load();
        if (wasPlaying || isPlaying) {
          audioRef.current.play().catch(() => setIsPlaying(false));
        }
      }
    }

    return () => {
      window.removeEventListener('music-duck', handleDuck);
      window.removeEventListener('music-unduck', handleUnduck);
    };
  }, [currentSource, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(err => console.error(err));
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <audio
        ref={audioRef}
        loop
      />
      <MagneticButton>
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-sec text-main flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Toggle Music"
        >
          <div className="flex items-center justify-center gap-[3px] h-5 w-5">
            <motion.div
              animate={isPlaying ? { height: ["20%", "80%", "20%"] } : { height: "20%" }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["40%", "100%", "40%"] } : { height: "40%" }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["30%", "70%", "30%"] } : { height: "30%" }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-[3px] bg-current rounded-full"
            />
            <motion.div
              animate={isPlaying ? { height: ["50%", "90%", "50%"] } : { height: "50%" }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut", delay: 0.3 }}
              className="w-[3px] bg-current rounded-full"
            />
          </div>
        </button>
      </MagneticButton>
    </div>
  );
}

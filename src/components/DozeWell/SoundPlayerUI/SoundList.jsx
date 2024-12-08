import { useState, useRef } from "react";
import { soundList } from "../../../data/data";
import PlayerController from "./PlayerController";

const SoundList = () => {
  const [currentSound, setCurrentSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  // Function to play selected sound
  const handlePlaySound = (sound) => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentSound(sound);
    audioRef.current.src = sound.soundFile;
    audioRef.current.play();
    setIsPlaying(true);

    audioRef.current.onended = () => setIsPlaying(false);
  };

  // Pause/Resume functionality
  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Stop playback
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <section className="container my-5 space-y-10 mx-auto px-10 sm:px-10 text-white">
      {/* Sound Buttons */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-6 md:px-8">
        {soundList.map((sound, i) => (
          <div className="space-y-3" key={i}>
            <button
              className="bg-purple-dozewell-accent px-5 py-5 rounded-md w-20"
              onClick={() => handlePlaySound(sound)}
            >
              <img className="w-10 h-10" src={sound.image} alt={sound.name} />
            </button>
            <h1 className="font-bold text-sm font-primary">{sound.name}</h1>
          </div>
        ))}
      </div>

      {/* Player Controller */}
      <PlayerController
        currentSound={currentSound}
        isPlaying={isPlaying}
        onTogglePlayback={togglePlayback}
        onStop={handleStop}
      />
    </section>
  );
};

export default SoundList;

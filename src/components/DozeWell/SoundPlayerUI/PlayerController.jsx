import PropTypes from "prop-types";
import {
  FaPlay,
  FaStopwatch,
  FaDownload,
  FaSlidersH,
  FaStop,
} from "react-icons/fa";

const PlayerController = ({
  currentSound,
  isPlaying,
  onTogglePlayback,
  onStop,
}) => {
  if (!currentSound) return null;

  return (
    <div className="bg-black text-white px-6 py-4 rounded-lg flex items-center justify-between space-x-4">
      {/* Play Button */}
      <div className="flex flex-col items-center">
        <button
          className="text-white text-xl bg-transparent"
          onClick={onTogglePlayback}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <FaPlay />
        </button>
        <span className="text-sm mt-2">Play</span>
      </div>

      {/* Stop */}
      <div className="flex flex-col items-center">
        <button className="text-white text-xl bg-transparent" onClick={onStop}>
          <FaStop />
        </button>
        <span className="text-sm mt-2">Stop</span>
      </div>

      {/* Timer Button */}
      <div className="flex flex-col items-center">
        <button className="text-white text-xl bg-transparent">
          <FaStopwatch />
        </button>
        <span className="text-sm mt-2">Timer</span>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 mx-4">
        <input
          type="range"
          min="0"
          max="100"
          className="w-full h-2 rounded-lg cursor-pointer appearance-none bg-gray-700"
          style={{
            accentColor: "purple",
          }}
        />
      </div>

      {/* Save Mix */}
      <div className="flex flex-col items-center">
        <button className="text-white text-xl bg-transparent">
          <FaDownload />
        </button>
        <span className="text-sm mt-2">Save Mix</span>
      </div>

      {/* Console */}
      <div className="flex flex-col items-center">
        <button className="text-white text-xl bg-transparent relative">
          <FaSlidersH />
          <span className="absolute -top-2 -right-3 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <span className="text-sm mt-2">Console</span>
      </div>
    </div>
  );
};

PlayerController.propTypes = {
  currentSound: PropTypes.shape({
    name: PropTypes.string.isRequired,
    soundFile: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default PlayerController;

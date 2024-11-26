import PropTypes from "prop-types";
import { Settings, Calendar, Bell, Clock, Moon } from "lucide-react";
import Card from "../Card";

const SleepQualityScore = ({ className = "" }) => (
  <Card className={`p-6 mb-6 ${className}`}>
    <div className="flex justify-between items-center">
      <div className="text-lg rounded-full bg-gray-light-dozewell px-6 py-2 font-semibold">
        Sleep Quality
      </div>
      <div className="flex space-x-2">
        <div className="rounded-full bg-gray-light-dozewell p-3">
          <Calendar className="w-6 h-6" />
        </div>
        <div className="rounded-full bg-gray-light-dozewell p-3">
          <Bell className="w-6 h-6" />
        </div>
        <div className="rounded-full bg-gray-light-dozewell p-3">
          <Settings className="w-6 h-6" />
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center mb-6">
      <div className="relative w-60 h-60">
        {" "}
        <div className="flex-col absolute inset-0 flex items-center justify-center">
          <div className="text-5xl text-white font-bold">75°</div>{" "}
          <span className="text-2xl font-semibold text-white">Score</span>{" "}
        </div>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-white"
            strokeWidth="14"
            stroke="currentColor"
            fill="transparent"
            r="96"
            cx="112"
            cy="112"
          />
          <circle
            className="text-purple-dozewell-accent"
            strokeWidth="14"
            stroke="currentColor"
            fill="transparent"
            r="96"
            cx="112"
            cy="112"
            strokeDasharray="603"
            strokeDashoffset="150"
          />
        </svg>
      </div>
      <div className="text-white text-xl mt-4">Great job you did well</div>
    </div>

    <div className="flex justify-center" style={{ gap: "150px" }}>
      <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-3 px-10 text-white">
        <Clock className="text-purple-600" />
        <div>
          <div className="font-semibold">5h 20m</div>
          <div className="text-sm text-gray-500">Time in bed</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-3 px-10 text-white">
        <Moon className="text-purple-600" />
        <div>
          <div className="font-semibold">2h 20m</div>
          <div className="text-sm text-gray-500">Time Awake</div>
        </div>
      </div>
    </div>
    <div className="flex justify-center text-white text-lg mt-4">
      <p style={{ maxWidth: "800px", textAlign: "center" }}>
        By prioritizing sleep quality, you&apos;re investing in your health and
        well-being. Remember, it&apos;s not just about getting more
        sleep—it&apos;s about getting better sleep.
      </p>
    </div>
  </Card>
);

SleepQualityScore.propTypes = {
  className: PropTypes.string,
};

export default SleepQualityScore;

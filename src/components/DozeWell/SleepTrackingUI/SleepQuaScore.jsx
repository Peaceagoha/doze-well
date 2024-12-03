import PropTypes from "prop-types";
import { Settings, Calendar, Bell, Clock, Moon } from "lucide-react";
import CircularProgressBar from "./ScoreBar";
import Card from "../Card";

const SleepQualityScore = ({ className = "" }) => {
  return (
    <section className="px-4 mt-4 sm:px-8 sm:mt-0">
      <Card className={`p-6 mb-6 ${className}`}>
        <div className="flex justify-between items-center">
          <div className="text-sm sm:text-lg rounded-full bg-gray-light-dozewell px-4 py-1 sm:px-6 sm:py-2 font-semibold">
            Sleep Quality
          </div>
          <div className="flex space-x-1 sm:space-x-2">
            <div className="rounded-full bg-gray-light-dozewell p-2 sm:p-3">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="rounded-full bg-gray-light-dozewell p-2 sm:p-3">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="rounded-full bg-gray-light-dozewell p-2 sm:p-3">
              <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        <CircularProgressBar targetProgress={75} size={250} strokeWidth={20} />

        <div
          className="flex items-center justify-between mx-auto"
          style={{ maxWidth: "550px" }}
        >
          <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-2 px-3 sm:py-3 sm:px-8 text-white">
            <Clock className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <div className="font-semibold text-sm sm:text-base">5h 20m</div>
              <div className="text-xs sm:text-sm text-gray-500">
                Time in bed
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-2 px-3 sm:py-3 sm:px-8 text-white">
            <Moon className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <div className="font-semibold text-sm sm:text-base">2h 20m</div>
              <div className="text-xs sm:text-sm text-gray-500">Time Awake</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-white mt-6">
          <p
            className="text-center text-sm sm:text-lg leading-tight sm:leading-normal"
            style={{ maxWidth: "90%", sm: "800px" }}
          >
            By prioritizing sleep quality, you&apos;re investing in your health
            and well-being. Remember, it&apos;s not just about getting more
            sleep—it&apos;s about getting better sleep.
          </p>
        </div>
      </Card>
    </section>
  );
};

SleepQualityScore.propTypes = {
  className: PropTypes.string,
};

export default SleepQualityScore;

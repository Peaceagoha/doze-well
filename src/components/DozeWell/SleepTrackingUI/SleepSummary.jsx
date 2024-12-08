import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import Card from "../Card";
import { Clock, Moon } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sleepData = [
  { time: "21:56", stage: 4 }, // Awake
  { time: "22:10", stage: 2 }, // REM
  { time: "23:30", stage: 3 }, // Light
  { time: "12:00", stage: 3 }, // Deep
  { time: "12:50", stage: 2 }, // Light
  { time: "01:00", stage: 3 }, // REM
  { time: "03:15", stage: 2 }, // Awake
  { time: "03:50", stage: 3 }, // Awake
  { time: "04:00", stage: 1 }, // REM
  { time: "05:00", stage: 2 }, // Light
  { time: "05:35", stage: 3 }, // Deep
  { time: "06:00", stage: 2 }, // Light
  { time: "06:50", stage: 1 }, // REM
  { time: "07:12", stage: 2 }, // Awake
];

const sleepAnalysis = [
  { stage: "Awake", percentage: 25, duration: "30min", intensity: "Low" },
  { stage: "REM", percentage: 30, duration: "40min", intensity: "Low" },
  { stage: "Light", percentage: 50, duration: "3h 02min", intensity: "High" },
  { stage: "Deep", percentage: 70, duration: "4h 20min", intensity: "High" },
];

const SleepSummaryPage = ({ className = "" }) => {
  return (
    <section
      className="px-4 mt-4 sm:px-8 sm:mt-0"
      style={{ overflow: "hidden" }}
    >
      <Card className={`relative p-6 mb-6 ${className}`}>
        <div className="text-gray-100 rounded-xl mx-auto space-y-6 ">
          <div className="animate-pulse-color inline-block text-sm sm:text-lg rounded-full bg-gray-light-dozewell px-4 py-1 sm:px-6 sm:py-2 font-semibold text-left ml-0">
            Sleep Summary
          </div>

          {/* Sleep Summary Section */}
          <div className="space-y-6">
            <h2 className="hidden sm:flex text-2xl text-white font-semibold text-center">
              Total
            </h2>
            <div
              className="hidden sm:flex items-center justify-between mx-auto"
              style={{ maxWidth: "550px" }}
            >
              <div className="flex text-white">
                <div className="rounded-full me-2 mt-1 w-4 h-4 bg-white"></div>
                <div>
                  <div className="text-md">Awake</div>
                  <div className="text-md ">10%</div>
                  <div className="text-md">1h 12m</div>
                </div>
              </div>
              <div className="flex text-white">
                <div className="rounded-full me-2 mt-1 w-4 h-4 bg-light-blue-bg"></div>
                <div>
                  <div className="text-md">Light</div>
                  <div className="text-md ">15%</div>
                  <div className="text-md">1h 12m</div>
                </div>
              </div>
              <div className="flex text-white">
                <div className="rounded-full me-2 mt-1 w-4 h-4 bg-dark-blue"></div>
                <div>
                  <div className="text-md">REM</div>
                  <div className="text-md ">45%</div>
                  <div className="text-md">1h 12m</div>
                </div>
              </div>
              <div className="flex text-white">
                <div className="rounded-full me-2 mt-1 w-4 h-4 bg-dark-blue-deep"></div>
                <div>
                  <div className="text-md">Deep</div>
                  <div className="text-md ">20%</div>
                  <div className="text-md">1h 12m</div>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={sleepData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#628FC7" stopOpacity={1} />
                    <stop offset="21%" stopColor="#07305F" stopOpacity={1} />
                    <stop offset="47%" stopColor="#1E4979" stopOpacity={1} />
                    <stop offset="70%" stopColor="#07305F" stopOpacity={1} />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="time"
                  tick={{ fill: "#f1faee" }}
                  axisLine={{ stroke: "#f1faee" }}
                />
                {useMediaQuery({ minWidth: 640 }) && (
                  <YAxis
                    type="number"
                    domain={[0, 4]}
                    tickFormatter={(value) =>
                      ["", "Deep", "Light", "REM", "Awake"][value]
                    }
                    tick={{ fill: "#f1faee" }}
                    axisLine={{ stroke: "#f1faee" }}
                  />
                )}

                <Tooltip
                  formatter={(value) => {
                    const stages = ["Awake", "REM", "Light", "Deep"];
                    return stages[value];
                  }}
                  labelFormatter={(label) => `Time: ${label}`}
                  contentStyle={{
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                />
                <Area
                  dataKey="stage"
                  stroke="#6a5acd"
                  fill="url(#colorGradient)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div
              className="sm:hidden flex items-center justify-between mx-auto"
              style={{ maxWidth: "550px" }}
            >
              <div className="flex text-white">
                <div className=" me-2 mt-1 w-3 h-3 bg-white"></div>
                <div className="text-md">Awake</div>
              </div>
              <div className="flex text-white">
                <div className="me-2 mt-1 w-3 h-3 bg-light-blue-bg"></div>
                <div className="text-md">Light</div>
              </div>
              <div className="flex text-white">
                <div className="me-2 mt-1 w-3 h-3 bg-dark-blue"></div>
                <div className="text-md">REM</div>
              </div>
              <div className="flex text-white">
                <div className=" me-2 mt-1 w-3 h-3 bg-dark-blue-deep"></div>
                <div className="text-md">Deep</div>
              </div>
            </div>
            <div
              className="flex items-center justify-between mx-auto"
              style={{ maxWidth: "550px" }}
            >
              <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-2 px-3 sm:py-3 sm:px-8 text-white">
                <Clock className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    40min
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Sleep Time
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-purple-dozewell-accent rounded-lg shadow-lg py-2 px-3 sm:py-3 sm:px-8 text-white">
                <Moon className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    35min
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Sleep Interrupted
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Activities Section */}
          <div className="space-y-4 ">
            <div
              className="animate-pulse-color inline-block text-sm sm:text-lg rounded-full bg-gray-light-dozewell px-4 py-1 sm:px-6 sm:py-2 font-semibold text-left ml-0"
              style={{ marginTop: "40px" }}
            >
              Sleep Activities
            </div>
            <div
              className={`space-y-4 bg-purple-dozewell-accent p-6 sm:rounded-lg ${
                useMediaQuery({ maxWidth: 640 })
                  ? "absolute left-0 w-full px-6"
                  : "mx-auto"
              }`}
              style={{
                marginTop: "40px",
                marginBottom: "60px",
                maxWidth: useMediaQuery({ maxWidth: 640 }) ? "100%" : "100%",
              }}
            >
              <div className="bg-purple-dozewell-light flex justify-between items-center bg-teal-700 px-4 py-3">
                <span className="font-medium text-white">Snoring</span>
                <button className="bg-gray-light-dozewell font-semibold px-6 py-2 hover:bg-gray-dark-dozewell hover:text-white shadow-lg">
                  View Clips
                </button>
              </div>
              <div className="bg-purple-dozewell-light flex justify-between items-center bg-teal-700 px-4 py-3">
                <span className="font-medium text-white">Sleep Talking</span>
                <button className="bg-gray-light-dozewell font-semibold px-6 py-2 hover:bg-gray-dark-dozewell hover:text-white shadow-lg">
                  View Clips
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 ">
            <div
              className="animate-pulse-color inline-block text-sm sm:text-lg rounded-full bg-gray-light-dozewell px-4 py-1 sm:px-6 sm:py-2 font-semibold text-left ml-0"
              style={{
                marginTop: useMediaQuery({ maxWidth: 640 }) ? "250px" : "100px",
              }}
            >
              Sleep Analysis
            </div>
            <div
              className="grid grid-cols-2 mx-auto md:grid-cols-4 gap-6"
              style={{
                marginTop: "40px",
                marginBottom: "60px",
                maxWidth: "800px",
              }}
            >
              {sleepAnalysis.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-gray-100 text-white text-center space-x-2 rounded-lg"
                >
                  <div
                    className="bg-gray-light-dozewell rounded-lg shadow-2xl"
                    style={{ height: "100px" }}
                  >
                    <h3
                      className="bg-purple-dozewell-accent p-2 rounded-lg"
                      style={{
                        height: `${item.percentage * 1.2}px`,
                        minHeight: "10px",
                      }}
                    >
                      {item.percentage}%
                    </h3>
                  </div>
                  <div className="space-y-2 text-start">
                    <p className="font-medium">{item.stage}</p>
                    <p className="text-sm">{item.duration}</p>
                    <p className="text-xs">{item.intensity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

SleepSummaryPage.propTypes = {
  className: PropTypes.string,
};

export default SleepSummaryPage;

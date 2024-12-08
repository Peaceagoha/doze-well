import PropTypes from "prop-types";
import BackgroundDropdown from "./BackgroundDropdown";
import Card from "../Card";

const WakeUpOptimization = ({ className = "" }) => (
  <Card className={`md:p-6 p-3 ${className}`}>
    <main className="w-full flex flex-col items-center justify-between md:flex md:flex-row">
      <aside className="md:w-3/5 w-full flex flex-col items-center justify-center space-y-4">
        <div className="flex w-full md:gap-3 items-center justify-between h-55px">
          <h1 className="text-white font-bold text-[15px] md:text-xl capitalize">
            Set Wake up Alarm
          </h1>
          <span className="flex items-center justify-center gap-3 h-[55px] bg-[#4B0082] w-fit px-10 md:px-20 md:-mr-2 text-white capitalize text-sm font-bold rounded-lg">
            dance my tune
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-dark-dozewell peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4B0082]"></div>
          </label>
        </div>

        <div className="flex w-full gap-3 items-center justify-between h-55px">
          <h1 className="text-white font-bold text-[15px] md:text-xl capitalize">
            Sleeping Environment
          </h1>
          <span className="flex items-center justify-center gap-3 px-10 h-[55px] bg-[#4B0082] md:px-20 w-fit  text-white capitalize text-sm font-bold rounded-lg">
            Comfortable
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-dark-dozewell peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4B0082]"></div>
          </label>
        </div>

        <div className="flex w-full gap-3 items-center justify-start h-55px">
          <h1 className="text-white font-bold text-xl capitalize">
            Sleep Time
          </h1>
          <span className="flex items-center justify-center gap-3 h-[55px] ml-[180px] md:ml-[280px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
            23:10
          </span>
        </div>

        <div className="flex w-full gap-3 items-center justify-start h-55px">
          <h1 className="text-white font-bold text-xl capitalize">
            Sleep Time
          </h1>
          <div className="flex items-center justify-center ml-[120px] md:ml-[230px] gap-4">
            <span className="flex items-center justify-center gap-3 h-[55px] ml-md:[250px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
              Monday
            </span>
            <span className="flex items-center justify-center gap-3 h-[55px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg">
              6:30
            </span>
          </div>
        </div>
      </aside>

      <BackgroundDropdown />
    </main>
  </Card>
);

WakeUpOptimization.propTypes = {
  className: PropTypes.string,
};

export default WakeUpOptimization;

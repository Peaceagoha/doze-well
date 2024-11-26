import SleepTab from "./SleepTab";
import SleepQualityScore from "./SleepQuaScore";

const SleepTrackingUI = () => {
  return (
    <div className="px-10 container w-full max-w-full">
      <div className="max-w-7xl mx-auto h-full">
        <SleepTab />
        <div className="container space-y-6">
          <SleepQualityScore className="mx-auto" />
          {/* <SleepSummary />
          <SleepActivities />
          <SleepAnalysis /> */}
        </div>
      </div>
    </div>
  );
};

export default SleepTrackingUI;

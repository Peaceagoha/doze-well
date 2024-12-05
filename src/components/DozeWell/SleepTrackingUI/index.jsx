import SleepTab from "./SleepTab";
import SleepQualityScore from "./SleepQuaScore";
import SleepSummaryPage from "./SleepSummary";

const SleepTrackingUI = () => {
  return (
    <div className="w-full max-w-full h-full">
      <div className="max-w-7xl mx-auto h-full">
        <SleepTab className="lg:hidden" />
        <div className="space-y-6">
          <SleepQualityScore className="mx-auto" />
          <SleepSummaryPage />
        </div>
      </div>
    </div>
  );
};

export default SleepTrackingUI;

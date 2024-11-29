import WakeUpHeader from "./WakupHeader";
import WakeUpOptimization from "./WakeUpOpt";

const WakeUpUI = () => {
  return (
    <div className="md:px-10 lg:container mx-auto w-full max-w-full">
      <div className="max-w-7xl mx-auto ">
        <WakeUpHeader />
        <WakeUpOptimization />

        {/* <div className="container space-y-6">
          <SleepQualityScore className="mx-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default WakeUpUI;

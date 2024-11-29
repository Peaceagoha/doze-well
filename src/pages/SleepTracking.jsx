import Nav from "../components/DozeWell/Nav";
import SleepTrackingUI from "../components/DozeWell/SleepTrackingUI";

const SleepTracking = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="sound-player-bg fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]" />
      <Nav />
      <div className="relative z-10 px-4 sm:px-10 py-8">
        <SleepTrackingUI />
      </div>
    </div>
  );
};

export default SleepTracking;

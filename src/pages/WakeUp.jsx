import Nav from "../components/DozeWell/Nav";
import WakeUpUI from "../components/DozeWell/WakeUpUI";
import { BackgroundProvider } from "../components/DozeWell/WakeUpUI/BGFunction/BackgroundProvider";

const WakeUp = () => {
  return (
    <BackgroundProvider>
      <section className="w-full min-h-screen">
        <div className="sound-player-bg fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]" />
        <Nav />
        <div>
          <WakeUpUI />
        </div>
      </section>
    </BackgroundProvider>
  );
};

export default WakeUp;

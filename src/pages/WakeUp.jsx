import Nav from "../components/DozeWell/Nav";
import WakeUpUI from "../components/DozeWell/WakeUpUI";

const WakeUp = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="sound-player-bg fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]" />

      <Nav className="z-10" />
      <div>
        <WakeUpUI />
      </div>
    </section>
  );
};

export default WakeUp;

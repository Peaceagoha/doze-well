import Nav from "../components/DozeWell/Nav";
import SoundPlayerUI from "../components/DozeWell/SoundPlayerUI";
import { BackgroundProvider } from "../components/DozeWell/WakeUpUI/BGFunction/BackgroundProvider";

const SoundPlayer = () => {
  return (
    <BackgroundProvider>
      <div className="w-full min-h-screen">
        <div className="sound-player-bg fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]" />
        <Nav />
        <SoundPlayerUI />
      </div>
    </BackgroundProvider>
  );
};

export default SoundPlayer;

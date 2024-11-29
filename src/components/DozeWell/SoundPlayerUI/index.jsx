import SoundFilter from "./SoundFilter";
import SoundList from "./SoundList";
// import PlayerController from "./PlayerController";

const SoundPlayerUI = () => {
  return (
    <section className="w-full max-w-full h-full">
      <SoundFilter />
      <SoundList />
    </section>
  );
};

export default SoundPlayerUI;

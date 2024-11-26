import SoundFilter from "./SoundFilter";
import SoundList from "./SoundList";
import PlayerTimer from "./PlayerTimer";

const SoundPlayerUI = () => {
  return (
    <section className="w-full max-w-full">
      <SoundFilter />
      <SoundList />
      <PlayerTimer />
    </section>
  );
};

export default SoundPlayerUI;

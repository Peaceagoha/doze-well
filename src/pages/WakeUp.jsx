import Nav from "../components/DozeWell/Nav";
import { useStore } from "@nanostores/react";
import { $bg } from "../store.js";
import WakeUpUI from "../components/DozeWell/WakeUpUI";
//

const WakeUp = () => {
  const bg = useStore($bg);
  console.log(bg);

  return (
    //
    <section className="w-full min-h-screen">
      <div
        className={`${bg} fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]`}
      />
      <Nav />
      <div>
        <WakeUpUI />
      </div>
    </section>
    //
  );
};

export default WakeUp;

import { useSelector } from "react-redux";
import { selectUsers } from "../../../store/user";

const WakeUpHeader = () => {
  const currentUser = useSelector(selectUsers).currentUser;

  return (
    <div className="flex flex-col items-start justify-center gap-2 py-11 px-[30px]">
      <h1 className="text-white font-bold capitalize text-2xl">Hello</h1>
      <h1 className="text-white font-bold capitalize text-2xl">
        {currentUser.displayName ||
          (currentUser.email && currentUser.email.split("@")[0])}
      </h1>
      <p className="font-bold text-white capitalize">welcome back!</p>
    </div>
  );
};

export default WakeUpHeader;

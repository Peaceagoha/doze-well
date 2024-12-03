import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useStore } from "@nanostores/react";
import { $bg } from "../../../store";
import { BACKGROUNDS } from "../../../data/data";

const BackgroundDropdown = () => {
  const bg = useStore($bg);
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    switch (bg) {
      case "sound-player-bg":
        setImgSrc("/src/assets/bg-dashboard.png");
        setName("Default");
        break;
      case "bg-comfortable":
        setImgSrc("/src/assets/bg-dashboard_2.png");
        setName("Comfortable");

        break;
      case "bg-serene":
        setImgSrc("/src/assets/bg-dashboard_3.png");
        setName("Serene");

        break;
      case "bg-calm":
        setImgSrc("/src/assets/bg-dashboard_4.png");
        setName("Calm");

        break;
    }
  }, [bg]);

  const currentBackground = $bg.get();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const backgroundOptions = BACKGROUNDS.filter(
    (bg) => bg.name !== currentBackground
  );

  return (
    <div className="md:w-2/5 py-5 flex items-center md:flex-col justify-center gap-3 relative">
      <p className="capitalize text-xl">Change Background</p>
      <div>
        <img
          src={imgSrc}
          alt="Background Preview"
          className="h-[200px] w-[300px] object-cover"
        />
        <div
          className="flex items-center w-full mt-2 justify-between gap-3 h-[55px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {name}
          <ChevronDown />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1">
            {backgroundOptions.map((background) => (
              <div
                key={background.name}
                className="bg-[#4B0082] text-white px-[15px] py-2 capitalize cursor-pointer hover:bg-purple-700"
                onClick={() => {
                  $bg.set(background.bgClass);

                  setIsDropdownOpen(false);
                }}
              >
                {background.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundDropdown;

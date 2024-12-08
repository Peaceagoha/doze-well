import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useStore } from "@nanostores/react";
import { $bg } from "../../../store/store";
import { BACKGROUNDS } from "../../../data/data";

const BackgroundDropdown = () => {
  const bg = useStore($bg);
  const [currentBackground, setCurrentBackground] = useState(
    BACKGROUNDS.find((b) => b.bgClass === bg) || BACKGROUNDS[0]
  );

  const backgroundOptions = BACKGROUNDS.filter(
    (background) => background.name !== currentBackground.name
  );

  const handleBackgroundChange = (background) => {
    $bg.set(background.bgClass);
    setCurrentBackground(background);
    setIsDropdownOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="md:w-2/5 py-5 flex items-center md:flex-col justify-center gap-3 relative">
      <p className="capitalize text-xl">Change Background</p>
      <div>
        <img
          src={currentBackground.image}
          alt="Background Preview"
          className="h-[200px] w-[300px] object-cover"
        />
        <div
          className="flex items-center w-full mt-2 justify-between gap-3 h-[55px] bg-[#4B0082] px-[15px] text-white capitalize font-bold rounded-lg cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {currentBackground.name}
          <ChevronDown />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1">
            {backgroundOptions.map((background) => (
              <div
                key={background.name}
                className="bg-[#4B0082] text-white px-[15px] py-2 capitalize cursor-pointer hover:bg-purple-700"
                onClick={() => handleBackgroundChange(background)}
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

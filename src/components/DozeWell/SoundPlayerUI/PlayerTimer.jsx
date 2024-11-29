import { playerTimer } from "../../../data/data";
import "../../../index.css";
import ProgressBar from "../../../assets/progress.svg";

const PlayerTimer = () => {
  //   const [sliderValue, setSliderValue] = useState(50);

  //   const handleSliderChange = (e) => {
  //     setSliderValue(e.target.value);
  //   };

  return (
    <div
      className="bg-gray-900 text-white p-4 flex items-center justify-between space-x-4 fixed bottom-0 w-full md:relative md:bottom-auto md:w-auto md:justify-between md:space-x-4"
      style={{ marginTop: "40px", padding: "40px 80px", background: "#22202B" }}
    >
      {/* Left Icons and Titles */}
      <div className="flex flex-row items-center gap-8">
        {playerTimer.slice(0, 2).map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={item.image}
              alt={item.title}
              className="h-6 w-6 cursor-pointer"
            />
            {/* Title for Desktop */}
            <span className="hidden md:block text-sm">{item.title}</span>
          </div>
        ))}
      </div>

      <div>
        <img src={ProgressBar} alt="" />
      </div>

      {/* Right Icons and Titles */}
      <div className="flex flex-row items-center gap-8">
        {playerTimer.slice(2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-6 w-6 cursor-pointer"
            />
            {/* Title for Desktop */}
            <span className="hidden md:block text-sm">{item.title}</span>
            {/* Badge for Console */}
            {item.title === "Console" && (
              <div className="absolute top-0 right-0 bg-blue-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTimer;

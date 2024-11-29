import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/Slide2.png";
import { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Slide1, Slide2];

  const handleNavDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      {/* Image Section */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 85}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-[85%] mr-1/2 flex-shrink-0 rounded-lg overflow-hidden transition-transform duration-500 ${
                index === currentIndex ? "scale-100 z-10" : "scale-75"
              }`}
              style={{
                transform: `scale(${index === currentIndex ? 1 : 0.85})`,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleNavDotClick(index)}
            className={`nav-dot w-2 h-2 bg-white rounded-full my-0 mx-1/2 cursor-pointer ${
              index === currentIndex ? "active bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

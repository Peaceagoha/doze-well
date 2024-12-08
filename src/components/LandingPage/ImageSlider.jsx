import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/Slide2.png";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Slide1, Slide2];

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleSwipe = (direction) => {
    if (direction === "LEFT") {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (direction === "RIGHT") {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe with mouse
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8" {...swipeHandlers}>
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

      {/* Title, Body, and Avatar Section */}
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex flex-col items-center justify-center space-y-2"></div>
      </div>

      {/* Navigation Dots Section */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => {
          const isActiveDot = currentIndex === index;
          return (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                isActiveDot ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;

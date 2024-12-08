import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useRef, useEffect } from "react";
import { commentsData, responsive } from "../../data/data";

const CommentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = commentsData.length;
  const visibleCards = 3; // Number of cards visible at a time
  const totalDots = totalCards - visibleCards + 1; // Number of scroll groups
  const carouselRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalDots;
        if (carouselRef.current) {
          carouselRef.current.goToSlide(nextIndex);
        }
        return nextIndex;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [totalDots]);

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex); // Navigate to the specific dot group
    if (carouselRef.current) {
      carouselRef.current.goToSlide(dotIndex);
    }
  };

  const calculateActiveDot = (currentSlide) => {
    // Ensure the dot corresponds to the first card of the visible group
    return Math.min(Math.floor(currentSlide), totalDots - 1);
  };

  return (
    <section className="py-10 px-8 relative">
      {/* Carousel Section */}
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        arrows={false}
        showDots={false}
        beforeChange={(nextSlide) =>
          setCurrentIndex(calculateActiveDot(nextSlide))
        }
        customTransition="all 0.5s ease"
        autoPlay={false} // Auto-play is managed manually
        infinite={false}
        slidesToSlide={1}
        containerClass="carousel-container"
      >
        {commentsData.map((slide, index) => (
          <div
            key={index}
            className="bg-purple-dark-dozewell text-white flex h-full flex-col gap-8 items-start px-6 py-12 mr-4 leading-8"
          >
            <h1 className="font-bold text-lg">{slide.title}</h1>
            <p className="font-light leading-8 opacity-75 text-sm">
              {slide.body}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={slide.image}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-base font-bold">{slide.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Dots Section */}
      <div className="flex justify-center mt-6">
        {[...Array(totalDots)].map((_, dotIndex) => {
          const isActiveDot = currentIndex === dotIndex;
          return (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                isActiveDot ? "dot__three" : "bg-white"
              }`}
              style={{
                outline: "none",
                cursor: "pointer",
              }}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default CommentSlider;

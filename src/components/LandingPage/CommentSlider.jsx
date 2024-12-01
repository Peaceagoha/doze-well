import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useRef } from "react";
import { commentsData, responsive } from "../../data/data";

const CommentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = commentsData.length;
  const visibleCards = 3; // Number of cards visible at a time
  const totalDots = totalCards - visibleCards + 1; // Number of scroll groups
  const carouselRef = useRef(null);

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
        autoPlay={false}
        infinite={false}
        slidesToSlide={1}
        containerClass="carousel-container"
      >
        {commentsData.map((slide, index) => (
          <div
            key={index}
            className="bg-purple-dark-dozewell text-white flex h-full flex-col gap-8 items-start px-6 py-12 mr-4 leading-8"
          >
            <h1 className="font-bold">{slide.title}</h1>
            <p className="font-light leading-8 opacity-75">{slide.body}</p>
            <div className="flex gap-4 items-center">
              <img
                src={slide.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="text-base font-bold">{slide.name}</p>
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

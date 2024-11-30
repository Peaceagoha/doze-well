import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const Slider = ({ slides }) => {
  // Custom Left Arrow
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="arrow absolute -left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md  z-10"
    >
      <FaChevronLeft />
    </button>
  );

  // Custom Right Arrow
  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="arrow absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md  z-10"
    >
      <FaChevronRight />
    </button>
  );

  return (
    <section className="second__slider py-10 relative">
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="card__text bg-purple-dark-dozewell text-white flex flex-col gap-8 items-start px-4 py-12 mr-4 h-full"
          >
            <h1 className="font-bold">{slide.title}</h1>
            <p>{slide.body}</p>
            <button className="button__card bg-purple-dozewell text-white px-4 py-3 rounded-md">
              Learn more...
            </button>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;

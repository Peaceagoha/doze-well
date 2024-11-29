import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../data/data";

const Slider = ({ slides }) => {
  return (
    <section className="py-10">
      <Carousel responsive={responsive}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="bg-purple-dark-dozewell text-white flex flex-col gap-8 items-start px-4 py-4 mr-4 h-full"
          >
            <h1 className="font-bold">{slide.title}</h1>
            <p>{slide.body}</p>
            <button className="bg-purple-dozewell text-white px-3 py-2 rounded-md">
              Learn more ..
            </button>{" "}
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

import { useState } from "react";
import PropTypes from "prop-types";
import Arrow from "../../assets/arrow.png";

const Accordion = ({ text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="border-b-2 border-b-gray-dark-dozewell py-4 space-y-4">
      <div
        onClick={() => setVisible(!visible)}
        className="flex items-center cursor-pointer justify-between "
      >
        <p>{text}</p>
        <img
          // onClick={() => setVisible(!visible)}
          className={`w-3 cursor-pointer ${
            visible ? "rotate-180" : ""
          } transition-transform duration-300 ease-in`}
          src={Arrow}
          alt=""
        />
      </div>
      {visible && (
        <p>
          A sleep management app tracks your sleep patterns using sensors or
          wearable devices, analyzes the data to provide personalized insights
          and reports, offers tips and relaxation aids like white noise or
          meditations, and integrates with other devices to help you improve
          your sleep quality and achieve your sleep goals.
        </p>
      )}
    </div>
  );
};

Accordion.propTypes = {
  text: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;

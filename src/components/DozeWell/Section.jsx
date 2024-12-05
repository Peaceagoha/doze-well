// import PropTypes from "prop-types";

// // Custom Card Component
// const Card = ({ children, className = "" }) => (
//   <div
//     className={`bg-blue-card-bg rounded-lg shadow-lg ${className}`}
//     style={{ height: "100%" }}
//   >
//     {children}
//   </div>
// );

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };

// export default Card;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Section = ({ children, className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Example breakpoint for `sm`
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`${isMobile} ? "" : "container" ${className}`}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;

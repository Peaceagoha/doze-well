import PropTypes from "prop-types";

// Custom Card Component
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-blue-card-bg md:rounded-lg md:shadow-lg ${className}`}
    style={{ height: "100%" }}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;

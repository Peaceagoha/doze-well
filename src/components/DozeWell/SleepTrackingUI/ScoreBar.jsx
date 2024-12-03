import { useState, useEffect } from "react";
import { easeQuadInOut } from "d3-ease";
import PropTypes from "prop-types";

const CircularProgressBar = ({
  targetProgress = 75,
  size = 200,
  strokeWidth = 15,
  primaryColor = "#ffffff",
  secondaryColor = "#391E8A",
}) => {
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (3 / 4) * circumference;

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animateProgress = (timestamp) => {
      const elapsed = timestamp - startTime;
      const easedProgress = easeQuadInOut(Math.min(elapsed / duration, 1));
      const currentProgress = targetProgress * easedProgress;

      setProgress(currentProgress);
      setDisplayedProgress(Math.round(currentProgress));

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [targetProgress]);

  const strokeDashoffset = arcLength - (progress / 360) * arcLength;

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block", margin: "auto", marginTop: "20px" }}
    >
      {/* Background arc */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${arcLength} ${circumference}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        style={{
          transform: "rotate(135deg)",
          transformOrigin: "center",
        }}
      />

      {/* Progress arc */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={primaryColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${arcLength} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 0.3s ease",
          transform: "rotate(135deg)",
          transformOrigin: "center",
        }}
      />

      {/* Centered percentage text */}
      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size * 0.15}
        fontWeight="bold"
        fill={primaryColor}
      >
        {displayedProgress}°
      </text>
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fontSize={size * 0.1}
        fill={primaryColor}
      >
        Score
      </text>
    </svg>
  );
};

CircularProgressBar.propTypes = {
  targetProgress: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

CircularProgressBar.defaultProps = {
  targetProgress: 75,
  size: 200,
  strokeWidth: 15,
  primaryColor: "#ffffff",
  secondaryColor: "#391E8A",
};

export default CircularProgressBar;

// import { useState, useEffect } from "react";
// import { easeQuadInOut } from "d3-ease";
// import PropTypes from "prop-types";

// const CurvedProgressBar = ({ targetProgress = 75 }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const startTime = performance.now();
//     const duration = 1000; // Animation duration in milliseconds

//     const animate = (timestamp) => {
//       const elapsed = timestamp - startTime;
//       const easedProgress = easeQuadInOut(elapsed / duration);
//       setProgress(Number(targetProgress) * easedProgress);

//       if (elapsed < duration) {
//         requestAnimationFrame(animate);
//       } else {
//         setProgress(Number(targetProgress));
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [targetProgress]);

//   return (
//     <div className="progress-bar-container">
//       <div
//         className="progress-bar"
//         style={{
//           width: `${progress}%`,
//           borderRadius: "100px",
//           background: "linear-gradient(to right, #6a6af9, #9692ff)",
//           transition: "width 0.5s ease-in-out",
//         }}
//       >
//         <div className="progress-text">{Math.round(progress)}°</div>
//       </div>
//     </div>
//   );
// };

// CurvedProgressBar.propTypes = {
//   targetProgress: PropTypes.number,
// };

// CurvedProgressBar.defaultProps = {
//   targetProgress: 75,
// };

// export default CurvedProgressBar;

// import { useState, useEffect } from "react";
// import { easeQuadInOut } from "d3-ease";
// import PropTypes from "prop-types";

// const CircularProgressBar = ({
//   targetProgress = 75,
//   size = 200,
//   strokeWidth = 15,
//   primaryColor = "#6a6af9",
//   secondaryColor = "#ffffff",
// }) => {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   // Calculate circle dimensions and positioning
//   const center = size / 2;
//   const radius = center - strokeWidth / 2;
//   const circumference = 2 * Math.PI * radius;

//   useEffect(() => {
//     // Trigger visibility after a short delay to ensure mount
//     const visibilityTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     // Animation setup
//     const startTime = performance.now();
//     const duration = 1500; // Slightly longer animation

//     const animate = (timestamp) => {
//       const elapsed = timestamp - startTime;
//       const easedProgress = easeQuadInOut(elapsed / duration);
//       const currentProgress = Number(targetProgress) * easedProgress;

//       setProgress(currentProgress);

//       if (elapsed < duration) {
//         requestAnimationFrame(animate);
//       } else {
//         setProgress(Number(targetProgress));
//       }
//     };

//     // Start animation when visible
//     if (isVisible) {
//       requestAnimationFrame(animate);
//     }

//     // Cleanup
//     return () => {
//       clearTimeout(visibilityTimer);
//     };
//   }, [targetProgress, isVisible]);

//   // Calculate stroke dasharray and offset
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <div
//       className="circular-progress-container"
//       style={{
//         width: size,
//         height: size,
//         position: "relative",
//         opacity: isVisible ? 1 : 0,
//         transform: `scale(${isVisible ? 1 : 0.7})`,
//         transition: "all 0.5s ease-out",
//       }}
//     >
//       <svg width={size} height={size}>
//         {/* Background circle */}
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           stroke={secondaryColor}
//           opacity={0.3}
//         />

//         {/* Progress circle */}
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           stroke={primaryColor}
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference}
//           style={{
//             transition: "stroke-dashoffset 1.5s ease-in-out",
//             transform: "rotate(-90deg)",
//             transformOrigin: "center",
//             strokeDashoffset: isVisible ? strokeDashoffset : circumference,
//           }}
//         />
//       </svg>

//       {/* Centered percentage text */}
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.7})`,
//           fontSize: `${size / 5}px`,
//           fontWeight: "bold",
//           color: primaryColor,
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.5s ease-out",
//         }}
//       >
//         {Math.round(progress)}°
//       </div>
//     </div>
//   );
// };

// CircularProgressBar.propTypes = {
//   targetProgress: PropTypes.number,
//   size: PropTypes.number,
//   strokeWidth: PropTypes.number,
//   primaryColor: PropTypes.string,
//   secondaryColor: PropTypes.string,
// };

// CircularProgressBar.defaultProps = {
//   targetProgress: 75,
//   size: 200,
//   strokeWidth: 15,
//   primaryColor: "#6a6af9",
//   secondaryColor: "#9692ff",
// };

// export default CircularProgressBar;

// import { useState, useEffect } from "react";
// import { easeQuadInOut } from "d3-ease";
// import PropTypes from "prop-types";

// const CircularProgressBar = ({
//   targetProgress = 75,
//   size = 200,
//   strokeWidth = 15,
//   primaryColor = "#391E8A", // Blue for progress
//   secondaryColor = "#ffffff", // White for background
// }) => {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const center = size / 2;
//   const radius = center - strokeWidth / 2;
//   const circumference = 2 * Math.PI * radius;
//   const arcLength = (3 / 4) * circumference; // Three-quarter circle

//   useEffect(() => {
//     const visibilityTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     const startTime = performance.now();
//     const duration = 1500;

//     const animate = (timestamp) => {
//       const elapsed = timestamp - startTime;
//       const easedProgress = easeQuadInOut(elapsed / duration);
//       const currentProgress = Number(targetProgress) * easedProgress;

//       setProgress(currentProgress);

//       if (elapsed < duration) {
//         requestAnimationFrame(animate);
//       } else {
//         setProgress(Number(targetProgress));
//       }
//     };

//     if (isVisible) {
//       requestAnimationFrame(animate);
//     }

//     return () => {
//       clearTimeout(visibilityTimer);
//     };
//   }, [targetProgress, isVisible]);

//   const strokeDashoffset = arcLength - (progress / 100) * arcLength; // Adjust the offset for progress

//   return (
//     <svg
//       width={size}
//       height={size}
//       style={{ display: "block", margin: "auto" }}
//     >
//       {/* Background arc */}
//       <circle
//         cx={center}
//         cy={center}
//         r={radius}
//         fill="none"
//         stroke={secondaryColor}
//         strokeWidth={strokeWidth}
//         strokeDasharray={`${arcLength} ${circumference}`} // Three-quarter arc
//         strokeDashoffset={0}
//         strokeLinecap="round"
//         style={{
//           transform: "rotate(135deg)", // Rotate to face downward
//           transformOrigin: "center",
//         }}
//       />

//       {/* Progress arc */}
//       <circle
//         cx={center}
//         cy={center}
//         r={radius}
//         fill="none"
//         stroke={primaryColor}
//         strokeWidth={strokeWidth}
//         strokeDasharray={`${arcLength} ${circumference}`} // Three-quarter arc
//         strokeDashoffset={strokeDashoffset} // Adjust based on progress
//         strokeLinecap="round"
//         style={{
//           transition: "stroke-dashoffset 0.3s ease",
//           transform: "rotate(135deg)", // Rotate to face downward
//           transformOrigin: "center",
//         }}
//       />

//       {/* Centered percentage text */}
//       <text
//         x="50%"
//         y="45%"
//         textAnchor="middle"
//         dominantBaseline="middle"
//         fontSize={size * 0.15}
//         fontWeight="bold"
//         fill={secondaryColor}
//       >
//         {Math.round(progress)}°
//       </text>
//       <text
//         x="50%"
//         y="60%"
//         textAnchor="middle"
//         fontSize={size * 0.1}
//         fill={secondaryColor}
//       >
//         Score
//       </text>
//     </svg>
//   );
// };

// CircularProgressBar.propTypes = {
//   targetProgress: PropTypes.number,
//   size: PropTypes.number,
//   strokeWidth: PropTypes.number,
//   primaryColor: PropTypes.string,
//   secondaryColor: PropTypes.string,
// };

// CircularProgressBar.defaultProps = {
//   targetProgress: 75,
//   size: 200,
//   strokeWidth: 15,
//   primaryColor: "#391E8A",
//   secondaryColor: "#ffffff",
// };

// export default CircularProgressBar;

import { useState, useEffect } from "react";
import { easeQuadInOut } from "d3-ease";
import PropTypes from "prop-types";

const CircularProgressBar = ({
  targetProgress = 75,
  size = 200,
  strokeWidth = 15,
  primaryColor = "#391E8A",
  secondaryColor = "#ffffff",
}) => {
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (3 / 4) * circumference;

  useEffect(() => {
    const duration = 4000;
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

  const strokeDashoffset = arcLength - (progress / 100) * arcLength;

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block", margin: "auto" }}
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
        fill={secondaryColor}
      >
        {displayedProgress}°
      </text>
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fontSize={size * 0.1}
        fill={secondaryColor}
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
  primaryColor: "#391E8A",
  secondaryColor: "#ffffff",
};

export default CircularProgressBar;

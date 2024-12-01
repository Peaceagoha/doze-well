import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { BACKGROUNDS } from "../../../data/data";

export const BackgroundContext = createContext({
  currentBackground: BACKGROUNDS[0],
  setBackground: () => {},
});

export const BackgroundProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState(() => {
    const savedBackground = localStorage.getItem("app-background");
    return (
      BACKGROUNDS.find((bg) => bg.bgClass === savedBackground) || BACKGROUNDS[0]
    );
  });

  const setBackground = (background) => {
    setCurrentBackground(background);
    localStorage.setItem("app-background", background.bgClass);

    const bgElement = document.querySelector(".sound-player-bg");
    if (bgElement) {
      BACKGROUNDS.forEach((bg) => bgElement.classList.remove(bg.bgClass));
      bgElement.classList.add(background.bgClass);
    }
  };

  useEffect(() => {
    const bgElement = document.querySelector(".sound-player-bg");
    if (bgElement) {
      BACKGROUNDS.forEach((bg) => bgElement.classList.remove(bg.bgClass));
      bgElement.classList.add(currentBackground.bgClass);
    }
  }, [currentBackground]);

  return (
    <BackgroundContext.Provider value={{ currentBackground, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

BackgroundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBackground = () => useContext(BackgroundContext);

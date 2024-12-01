import { createContext } from "react";
import { BACKGROUNDS } from "../../../../data/data";

export const BackgroundContext = createContext({
  currentBackground: BACKGROUNDS[0],
  setBackground: () => {},
});

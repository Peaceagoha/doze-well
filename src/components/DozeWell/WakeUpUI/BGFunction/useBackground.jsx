import { useContext } from "react";
import { BackgroundContext } from "./BackgroundContext";

export const useBackground = () => useContext(BackgroundContext);

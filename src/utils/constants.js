import { createContext, useContext } from "react";

const ColorContext = createContext();

const colors = {
  primary: "#4CC9F0",
  secondary: "#6FC276",
  background: "#FFFFFF",
  text: "#111111",
};

export const ColorProvider = ({ props }) => {
  return <ColorContext.Provider value={colors}>{props}</ColorContext.Provider>;
};

export const useColor = () => useContext(ColorContext);

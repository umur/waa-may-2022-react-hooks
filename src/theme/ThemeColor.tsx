import React from "react";

interface ColorContext {
  color?: string;
}

export const ThemeColorContext = React.createContext<ColorContext>({});
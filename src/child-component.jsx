import React, { useContext } from "react";
import { ThemeContext } from "./theme.context";
import { ThemeProvider } from "./theme.provider";

const Test = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <p>Current Theme:{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};
export const ChildComponent = () => {
  return <ThemeProvider><Test /></ThemeProvider>;
};

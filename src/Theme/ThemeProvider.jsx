import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("");

  const ChangeThemeHandler = (theme) => {
    setTheme(theme);
  };
  const themeContent = {
    theme: theme,
    changeTheme: ChangeThemeHandler,
  };

  useEffect(() => {
    if (theme === "dark-mode") {
      document.body.classList.add("dark_theme");
    } else {
      document.body.classList.remove("dark_theme");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={themeContent}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

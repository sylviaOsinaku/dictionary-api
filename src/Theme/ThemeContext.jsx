import React from "react";
const ThemeContext = React.createContext({
  theme: "",
  changeTheme: (theme) => {},
});

export default ThemeContext;

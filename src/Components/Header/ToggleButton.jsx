import { useState, useContext } from "react";
import ThemeContext from "../../Theme/ThemeContext";
import classes from "./ToggleButton.module.css";
const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(true);
  const ctx = useContext(ThemeContext);
  const toggleHandler = () => {
    setLightMode((prevMode) => !prevMode);
    ctx.changeTheme(lightMode ? "dark-mode" : "");
  };

  return (
    <div className={classes["toggle-wrapper"]}>
      <label className={classes.switch}>
        <input
          type="checkbox"
          className={classes.input}
          onClick={toggleHandler}
        />
        <span className={`${classes.round} ${classes.slider} `} />
      </label>

      <svg viewBox="0 0 820 1000" fill="currentColor" height="2em" width="2em">
        <path d="M524 612c70.667-70.667 112.333-154.667 125-252 12.667-97.333-5-187.333-53-270 34.667 17.333 66.667 41.333 96 72 85.333 85.333 128 188.333 128 309s-42.667 223.667-128 309-188.667 128-310 128-224.667-42.667-310-128c-26.667-26.667-50.667-58-72-94 82.667 46.667 173 63.667 271 51 98-12.667 182.333-54.333 253-125" />
      </svg>
    </div>
  );
};

export default ToggleButton;

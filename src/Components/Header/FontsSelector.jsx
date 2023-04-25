import { useState } from "react";
import classes from "./FontsSelector.module.css";

const FontSelector = () => {
  const [font, setFont] = useState("Serif");
  const fontSelectorHandler = (e) => {
    console.log(e.target.value);
    setFont(e.target.value);
  };

  if (font === "Serif") {
    document.querySelector("body").style["fontFamily"] = "serif";
  } else if (font === "san-serif") {
    document.querySelector("body").style["fontFamily"] = "sans-serif";
  } else if (font === "monospace") {
    document.querySelector("body").style["fontFamily"] = "monospace";
  } else {
    document.querySelector("body").style["fontFamily"] = "serif";
  }

  return (
    <select
      name="fonts"
      id="fonts"
      className={classes.selectWrapper}
      onChange={fontSelectorHandler}
    >
      <option value="Serif" className={classes.option1}>
        Serif
      </option>
      <option value="san-serif" className={classes.option2}>
        Sans-Serif
      </option>
      <option value="monospace" className={classes.option3}>
        Monospace
      </option>
    </select>
  );
};

export default FontSelector;

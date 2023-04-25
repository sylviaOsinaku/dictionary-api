import BookIcon from "./BookIcon";
import FontSelector from "./FontsSelector";
import ToggleButton from "./ToggleButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes["nav-wrapper"]}>
      <BookIcon />
      <div>
        <FontSelector />
        <hr className={classes["vertical-seperator"]} />
        <ToggleButton />
      </div>
    </nav>
  );
};

export default Header;

import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes['error-wrapper']}>
      <h1 className={classes.emoji}>😕</h1>
      <h3>No Definitions Found</h3>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default Error;

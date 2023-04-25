import classes from "./Synonym.module.css";
const Synonym = (props) => {
  return (
    <div className={classes["sym-container"]}>
      <span className={classes.synonyms}>Synonym</span>
      <div className={classes["synonym-wrapper"]}>
        {props.synData.map((syn) => (
          <span key={Math.random()}>{syn},</span>
        ))}
      </div>
    </div>
  );
};
export default Synonym;

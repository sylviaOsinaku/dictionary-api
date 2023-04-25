import classes from "./Speech.module.css";
import Synonym from "./Synonym";

const Speech = (props) => {
  console.log(props.defData.synonyms);
  return (
    <div>
      <div className={classes["part-of-speech-wrapper"]}>
        <span className={classes["part-of-speech"]}>
          {props.defData.partOfSpeech}
        </span>
        <div className={classes["horizontal-line"]}></div>
      </div>

      <div>
        <h5 className={classes.meaning}>Meaning</h5>
        <ul>
          {props.defData.definitions.map((word) => (
            <li key={Math.random()}>
              {word.definition}
              <span className={classes.example}>
                {word.example ? `"${word.example}"` : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {props.defData.synonyms.length > 0 && (
        <Synonym synData={props.defData.synonyms} />
      )}
    </div>
  );
};

export default Speech;

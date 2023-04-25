import React from "react";
import classes from "./DisplayWord.module.css";
import Speech from "../PARTOFSPEECH/Speech";
import Source from "../PARTOFSPEECH/Source";
import AudioPlayer from "../Audio/AudioPlayer";
const DisplayWord = (props) => {
  const destructuredData = props.data[0];
  console.log(destructuredData);
  return (
    <div className={classes["word-wrapper"]}>
      <div className={classes["word-header"]}>
        <div>
          <h1 className={classes["word-name"]}>{destructuredData.word}</h1>
          <span className={classes.phonetics}>{destructuredData.phonetic}</span>
        </div>
        {destructuredData.phonetics.length > 0 &&
          destructuredData.phonetics.some((phone) => phone.audio !== "") && (
            <AudioPlayer pronounciations={destructuredData.phonetics} />
          )}
      </div>

      {destructuredData.meanings.map((meaning) => (
        <Speech key={Math.random()} defData={meaning} />
      ))}

      <Source source={destructuredData.sourceUrls} />
    </div>
  );
};

export default DisplayWord;

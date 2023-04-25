import React, { useState, useEffect } from "react";
import classes from "./AudioPlayer.module.css";
const AudioPlayer = (props) => {
  const audioFinder = (phonetics) => {
    return phonetics.audio !== "";
  };
  let wordToBePronounced = props?.pronounciations?.find((pronouncedWord) =>
    audioFinder(pronouncedWord)
  ).audio;

  console.log(wordToBePronounced);
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.src = wordToBePronounced;
  }, [wordToBePronounced, audio]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    const audioEndedHandler = () => {
      setIsPlaying(false);
    };
    audio.addEventListener("ended", audioEndedHandler);
    return () => {
      audio.removeEventListener("ended", audioEndedHandler);
    };
  }, [audio]);

  const togglePlayPauseHandler = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div onClick={togglePlayPauseHandler} className={classes["audio-player"]}>
      {isPlaying ? (
        <svg
          viewBox="0 0 1024 1024"
          fill="#a445ed"
          height="4.5em"
          width="4.5em"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1024 1024"
          fill="#a445ed"
          height="4.5em"
          width="4.5em"
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
        </svg>
      )}
    </div>
  );
};

export default AudioPlayer;

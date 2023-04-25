import React, { useState } from "react";
import Error from "./Components/Error/Error";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import DisplayWord from "./Components/UI/DisplayWord";
import { FadeLoader } from "react-spinners";
import ThemeProvider from "./Theme/ThemeProvider";

function App() {
  const [fetchedWord, setFetchedWord] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setsLoading] = useState(false);

  const fetchWord = async function (word) {
    setError(null);
    setsLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setError(null);
      const data = await response.json();
      setFetchedWord(data);
      setsLoading(false);
      console.log(fetchedWord[0]);
    } catch (error) {
      console.log(error);
      setFetchedWord([]);
      setError(true);
    }
  };

  //const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider>
      <Header />
      <Input fetchWordHandler={fetchWord} />
      {fetchedWord.length > 0 && !isLoading && (
        <DisplayWord data={fetchedWord} />
      )}
      {error && <Error />}
      {isLoading && !error && (
        <div className="loader">
          <FadeLoader
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#a445ed"
            margin={"3px"}
          />
        </div>
      )}

      {/* <div className="overlay"></div> */}
    </ThemeProvider>
  );
}

export default App;

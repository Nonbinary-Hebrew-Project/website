import React, { useCallback, useState } from "react";
import { transliterate } from "hebrew-transliteration";
import InsideTranslation from "./InsideTranslation";

export default function HebrewBlock({ children }) {
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [showTranslated, setShowTranslated] = useState(false);
  const handleTransliterate = useCallback(
    () => setShowTransliteration(!showTransliteration),
    [showTransliteration]
  );
  const handleTranslate = useCallback(
    () => setShowTranslated(!showTranslated),
    [showTranslated]
  );
  const srOnly = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  };
  return (
    <>
      <span
        dir="rtl"
        style={{
          backgroundColor: "lightgrey",
          borderRadius: "2px",
          color: "black",
          fontSize: "1.5rem",
          padding: "0.3rem",
        }}
      >
        {children}
      </span>
      <button
        style={{
          backgroundColor: "lightblue",
          borderRadius: "20px",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "1px",
          color: "black",
          padding: "0.2rem",
          marginLeft: "0.5rem",
          cursor: "pointer",
        }}
        onClick={handleTransliterate}
      >
        transliterate
      </button>
      <button
        style={{
          backgroundColor: "lightgreen",
          borderRadius: "20px",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "1px",
          color: "black",
          padding: "0.2rem",
          marginLeft: "0.5rem",
          cursor: "pointer",
        }}
        onClick={handleTranslate}
      >
        translate
      </button>
      {showTransliteration && (
        <>
          <br />
          <span
            style={{
              backgroundColor: "lightblue",
              borderRadius: "2px",
              color: "black",
              fontSize: "1.5rem",
              padding: "0.2rem",
            }}
          >
            {transliterate(children)}
          </span>
        </>
      )}
      {showTranslated && (
        <>
          <br />
          <InsideTranslation>{children}</InsideTranslation>
        </>
      )}
    </>
  );
}

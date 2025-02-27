import React, { useCallback, useState } from "react";
import { transliterate } from "hebrew-transliteration";
import InsideTranslation from "./InsideTranslation";
import { useCookies } from "react-cookie";

export default function HebrewBlock({ children }) {
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [cookies] = useCookies(["nbhp_transliterate", "nbhp_translate"]);
  // const [showTranslated, setShowTranslated] = useState(false);
  // const handleTransliterate = useCallback(
  //   () => setShowTransliteration(!showTransliteration),
  //   [showTransliteration]
  // );
  // const handleTranslate = useCallback(
  //   () => setShowTranslated(!showTranslated),
  //   [showTranslated]
  // );

  const srOnly = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  };

  return (
    <div style={{ padding: "0.4rem 0 0.4rem 0"}}>
    <div style={{ maxWidth: "fit-content" }}>
      <p
        dir="rtl"
        style={{
          backgroundColor: "lightgrey",
          borderRadius: "2px",
          color: "black",
          fontSize: "1.5rem",
          padding: "0.3rem",
          // maxWidth: "fit-content",
          margin: "0",
        }}
      >
        {children}
      </p>
      {cookies.nbhp_transliterate && (
        <p
          style={{
            backgroundColor: "lightblue",
            borderRadius: "2px",
            color: "black",
            fontSize: "1.5rem",
            padding: "0.2rem",
            // maxWidth: "fit-content",
            margin: "0",
          }}
        >
          {transliterate(children)}
        </p>
      )}
      </div>
      {cookies.nbhp_translate && (
        <>
          <InsideTranslation>{children}</InsideTranslation>
        </>
      )}
    </div>
  );
}

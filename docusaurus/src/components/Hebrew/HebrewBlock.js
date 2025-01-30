import React, { useCallback, useState } from "react";
import { transliterate } from "hebrew-transliteration";

export default function HebrewBlock({ children }) {
  const [showTrans, setShowTrans] = useState(false);
  const handle = useCallback(() => setShowTrans(!showTrans), [showTrans]);
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
          padding: "0.2rem",
          cursor: "pointer",
        }}
        onClick={handle}
      >
        {children}
      </span>
      {showTrans && <div>{transliterate(children)}</div>}
      {!showTrans && <div style={srOnly}>{transliterate(children)}</div>}
    </>
  );
}

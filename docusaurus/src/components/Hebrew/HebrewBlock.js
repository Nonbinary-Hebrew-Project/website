import React, { useCallback, useState } from "react";
import { transliterate } from "hebrew-transliteration";

export default function HebrewBlock({ children }) {
  const [showTrans, setShowTrans] = useState(false);
  const handle = useCallback(() => setShowTrans(!showTrans), [showTrans]);
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
    </>
  );
}

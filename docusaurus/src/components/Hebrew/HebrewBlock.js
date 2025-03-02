import React, { useCallback, useState } from "react";
import { Schema, transliterate } from "hebrew-transliteration";
import * as Schemas from "hebrew-transliteration/schemas";
import InsideTranslation from "./InsideTranslation";
import { useCookies } from "react-cookie";

export default function HebrewBlock({ children }) {
  const [cookies] = useCookies(["nbhp_transliterate", "nbhp_translate"]);

  const srOnly = {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: "1px",
    height: "1px",
    overflow: "hidden",
  };

  return (
    <div style={{ padding: "0.4rem 0 0.4rem 0" }}>
      <div data-search-children style={{ maxWidth: "fit-content" }}>
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
        <div style={{ display: "none" }}>
          {/* for search indexing */}
          {transliterate(children, Schemas.sblSimple)}
        </div>
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
            {transliterate(children, Schemas[cookies["nbhp_transliterate"]])}
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

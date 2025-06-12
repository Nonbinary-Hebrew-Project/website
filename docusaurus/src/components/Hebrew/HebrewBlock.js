import React from "react";
import { transliterate } from "hebrew-transliteration";
import * as Schemas from "hebrew-transliteration/schemas";
import InsideTranslation from "./InsideTranslation";
import { useLocalStorage } from "usehooks-ts";
import { translitOptions, translitStorageKey } from "../constants";
import { popularSchema } from "./popularSchema";

const AllSchemas = {...Schemas, popularSchema }

export default function HebrewBlock({ children }) {
  const [translit] = useLocalStorage(translitStorageKey, translitOptions[0].key);

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
          lang="he"
          dir="rtl"
          style={{
            backgroundColor: "lightgrey",
            borderRadius: "2px",
            color: "black",
            fontSize: "1.5rem",
            padding: "0.3rem",
            margin: "0",
          }}
        >
          {children}
        </p>
        <div style={{ display: "none" }}>
          {/* for search indexing */}
          {!!children && transliterate(children, AllSchemas.popularSchema)}
        </div>
        {translit !== translitOptions[0].key && (
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
            {children && transliterate(children, AllSchemas[translit])}
          </p>
        )}
      </div>
      {/* {false && (
        <>
          <InsideTranslation>{children}</InsideTranslation>
        </>
      )} */}
    </div>
  );
}

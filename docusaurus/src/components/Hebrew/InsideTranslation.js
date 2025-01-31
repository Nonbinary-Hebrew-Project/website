import React from "react";
import { transliterate } from "hebrew-transliteration";
import strongsHebrewDictionary from "./strongs-hebrew-dictionary";
import nonbinaryHebrewDictionary from "./nonbinary-hebrew-dictionary";
const dictionary = Object.values(strongsHebrewDictionary);

function translate(hebrewWord) {
  const cleanWord = hebrewWord.trim().replaceAll(/[.,]/g, "");
  const nonbinaryTranslation = nonbinaryHebrewDictionary.find(
    (dictWord) => cleanWord == dictWord.lemma
  );
  if (nonbinaryTranslation) return nonbinaryTranslation.def;

  const strongsTranslation = dictionary.find(
    (dictWord) => cleanWord == dictWord.lemma
  );
  if (strongsTranslation)
    return `${strongsTranslation.strongs_def}, ${strongsTranslation.kjv_def}`;
  return "?";
}

export default function InsideTranslation({ children }) {
  return (
    <span>
      {children
        .trim()
        .split(" ")
        .map((word, index) => (
          <span key={index}>
            <span
              dir="rtl"
              style={{
                backgroundColor: "lightgrey",
                borderRadius: "2px",
                borderStyle: "solid",
                borderWidth: "1px",
                color: "black",
                fontSize: "1.5rem",
                padding: "0.2rem",
              }}
            >
              {word}
            </span>
            <span
              style={{
                backgroundColor: "lightblue",
                borderRadius: "2px",
                borderStyle: "solid",
                borderWidth: "1px",
                color: "black",
                fontSize: "1.5rem",
                padding: "0.2rem",
              }}
            >
              {transliterate(word)}
            </span>
            <span
              style={{
                backgroundColor: "lightgreen",
                borderRadius: "2px",
                borderStyle: "solid",
                borderWidth: "1px",
                color: "black",
                fontSize: "1.5rem",
                padding: "0.2rem",
              }}
            >
              {translate(word)}
            </span>
            <br />
          </span>
        ))}
    </span>
  );
}

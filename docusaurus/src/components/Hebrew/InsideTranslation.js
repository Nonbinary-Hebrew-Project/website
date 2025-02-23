import React from "react";
import { transliterate } from "hebrew-transliteration";
import strongsHebrewDictionary from "./strongs-hebrew-dictionary";
import nonbinaryHebrewDictionary from "./nonbinary-hebrew-dictionary";
const dictionary = Object.values(strongsHebrewDictionary);

function ColorBlock({ children, color = "lightgreen" }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "black",
        fontSize: "1.5rem",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}

function WordTranslation({ children }) {
  const cleanWord = children.trim().replaceAll(/[.,]/g, "");
  const collator = new Intl.Collator("he", { usage: "search" });
  const results = [];
  const nonbinaryTranslation = nonbinaryHebrewDictionary.find(
    (dictWord) => collator.compare(cleanWord, dictWord.lemma) === 0
  );
  if (nonbinaryTranslation) results.push(nonbinaryTranslation.def);

  const strongsTranslation = dictionary.find(
    (dictWord) => collator.compare(cleanWord, dictWord.lemma) === 0
  );
  if (strongsTranslation)
    results.push(strongsTranslation.strongs_def, strongsTranslation.kjv_def);
  return (
    <>
      {nonbinaryTranslation || strongsTranslation ? (
        <ColorBlock>{results.join("; ")}</ColorBlock>
      ) : (
        <ColorBlock color="lightcoral">?</ColorBlock>
      )}
    </>
  );
}

export default function InsideTranslation({ children, isOnlyWord }) {
  return (
    <p
      style={{
        margin: "0",
      }}
    >
      {children
        .trim()
        .split(" ")
        .map((word, index, array) => (
          <div key={index}>
            {array.length > 1 && (
              <>
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
              </>
            )}

            <WordTranslation>{word}</WordTranslation>
          </div>
        ))}
    </p>
  );
}

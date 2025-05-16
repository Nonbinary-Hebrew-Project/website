import { ReactNode, useCallback, useEffect, useState } from "react";
import type { Props } from "@theme/NavbarItem/HtmlNavbarItem";
import clsx from "clsx";
import { translitOptions, translitStorageKey } from "./constants";
import { useLocalStorage } from "usehooks-ts";

export default function TranslateButtons({
  value,
  className,
  mobile = false,
  isDropdownItem = false,
}: Props): ReactNode {
  const [translit, setTranslit] = useLocalStorage(translitStorageKey, translitOptions[0].key);
  console.log(translit)

  useEffect(() => {
    // handle deprecated values
    if (!translitOptions.find(option => option.key === translit))
      setTranslit(translitOptions[0].key);
  }, []);

  const handleTransliterate = useCallback((event) => {
    setTranslit(translitOptions[event.target.selectedIndex].key);
  }, [translit]);
  const Comp = isDropdownItem ? "li" : "div";
  return (
    <>
      <Comp
        className={clsx(
          {
            navbar__item: !mobile && !isDropdownItem,
            "menu__list-item": mobile,
          },
          className
        )}
      >
        <label htmlFor="translit-select" style={{
          marginLeft: mobile ? "0.5rem" : "",
          marginTop: mobile ? "10rem" : "",
        }}>Transliteration:</label>
        <select id="translit-select"
          style={{
            padding: "0.3rem 0.5rem 0.3rem 0.5rem",
            marginLeft: "0.5rem",
          }}
          onChange={handleTransliterate}
          value={translitOptions.find(options => options.key === translit)?.label}
        >
          {translitOptions.map(option => {
            return <option key={option.key}>{option.label}</option>
          })}
        </select>
      </Comp>
      {/* <Comp
        className={clsx(
          {
            navbar__item: !mobile && !isDropdownItem,
            "menu__list-item": mobile,
          },
          className
        )}
      >
        <button
          style={{
            backgroundColor: cookies.nbhp_translate
              ? "lightgreen"
              : "lightgrey",
            borderRadius: "20px",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            color: "black",
            padding: "0.3rem 0.5rem 0.3rem 0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
            marginLeft: mobile ? "0.5rem" : "",
          }}
          onClick={handleTranslate}
        >
          translations: {cookies.nbhp_translate ? "on" : "off"}
        </button>
      </Comp> */}
    </>
  );
}

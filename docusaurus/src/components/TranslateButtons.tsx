import { ReactNode, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
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
  const [translit, setTranslit] = useLocalStorage(translitStorageKey, translitOptions[0]);

  useEffect(() => {
    // handle deprecated values
    if (translitOptions.indexOf(translit) === -1)
      setTranslit(translitOptions[0]);
  }, []);

  const handleTransliterate = useCallback(() => {
    const newValue =
      translitOptions[
        (translitOptions.indexOf(translit) + 1) % translitOptions.length
      ];
    setTranslit(newValue);
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
        <button
          style={{
            backgroundColor:
              translit !== translitOptions[0] ? "lightblue" : "lightgrey",
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
          onClick={handleTransliterate}
        >
          transliterations: {translit}
        </button>
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

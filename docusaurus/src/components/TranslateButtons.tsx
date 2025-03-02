import { ReactNode, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import type { Props } from "@theme/NavbarItem/HtmlNavbarItem";
import clsx from "clsx";
import * as Schemas from "hebrew-transliteration/schemas";

const translitOptions = ["false", ...Object.keys(Schemas)];

export default function TranslateButtons({
  value,
  className,
  mobile = false,
  isDropdownItem = false,
}: Props): ReactNode {
  const [cookies, setCookie] = useCookies([
    "nbhp_transliterate",
    "nbhp_translate",
  ]);

  useEffect(() => { // handle deprecated "true" value
    if (cookies["nbhp_transliterate"] === true)
      setCookie("nbhp_transliterate", "false");
  }, []);

  const handleTranslate = useCallback(() => {
    if (cookies.nbhp_translate) setCookie("nbhp_translate", "false");
    else if (
      cookies.nbhp_transliterate !== undefined ||
      cookies.nbhp_translate !== undefined
    )
      setCookie("nbhp_translate", "true");
    else if (
      cookies.nbhp_transliterate !== undefined ||
      confirm("This feature uses a small functional cookie, ok?")
    )
      setCookie("nbhp_translate", "true");
  }, [cookies]);

  const handleTransliterate = useCallback(() => {
    const newValue =
      translitOptions[
        (translitOptions.indexOf(cookies["nbhp_transliterate"] || "false") +
          1) %
          translitOptions.length
      ];
    setCookie("nbhp_transliterate", newValue);
    // if (cookies.nbhp_transliterate) setCookie("nbhp_transliterate", "false");
    // else if (
    //   cookies.nbhp_transliterate !== undefined ||
    //   cookies.nbhp_translate !== undefined
    // )
    //   setCookie("nbhp_transliterate", "true");
    //if (confirm("This feature uses a functional cookie, ok?"))
    // else setCookie("nbhp_transliterate", "true");
  }, [cookies]);
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
            backgroundColor: cookies.nbhp_transliterate
              ? "lightblue"
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
          onClick={handleTransliterate}
        >
          transliterations: {cookies.nbhp_transliterate || "off"}
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

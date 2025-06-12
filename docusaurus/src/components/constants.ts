import { useEffect, useState } from "react";

export const translitStorageKey = "nbhp-translit";

// tiberian is omitted because it caused crashes, something about nuqqud missing
export const translitOptions = [
  { key: "off", label: "Off" },
  { key: "popularSchema", label: "Popular" },
  { key: "brillAcademic", label: "Brill Academic" },
  { key: "brillSimple", label: "Brill Simple" },
  { key: "sblAcademicSpirantization", label: "SBL Academic" },
  { key: "sblSimple", label: "SBL Simple" },
  { key: "michiganClaremont", label: "Michigan Claremont" },
  { key: "romaniote", label: "Romaniote" },
  { key: "jss", label: "JSS" },
];
import { useEffect, useState } from "react";

export const translitStorageKey = "nbhp-translit";

// tiberian is omitted because it caused crashes, something about nuqqud missing
export const translitOptions = [
  "off",
  "brillAcademic",
  "brillSimple",
  "sblAcademicSpirantization",
  "sblSimple",
  "michiganClaremont",
  "romaniote",
  "jss",
];
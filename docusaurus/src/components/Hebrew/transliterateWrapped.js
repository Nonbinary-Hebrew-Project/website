import { transliterate } from "hebrew-transliteration";

export function transliterateWrapped(text, schema) {
  return transliterate(text, schema)
    .replaceAll("myshfchh", "mishpacha")
    .replaceAll("flvny", "ploni")
    .replaceAll("mvyt", "mi-beit")
}
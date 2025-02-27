import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import HebrewBlock from "@site/src/components/Hebrew/HebrewBlock";
import PdfViewer from "../components/PdfViewer";
import Files from "../components/Files";
import ContactForm from "../components/ContactForm";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  HebrewBlock,
  HB: HebrewBlock,
  PdfViewer,
  Files,
  ContactForm,
};

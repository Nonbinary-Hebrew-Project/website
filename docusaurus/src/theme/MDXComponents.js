import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import HebrewBlock from "@site/src/components/Hebrew/HebrewBlock";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  HebrewBlock,
  HB: HebrewBlock,
};

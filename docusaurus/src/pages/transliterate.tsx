import { useState } from "react";
import HebrewBlock from "../components/Hebrew/HebrewBlock";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function TransliteratePage() {
  const { siteConfig } = useDocusaurusContext();

  const [value, setValue] = useState("");
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We are building a bigger tent for nonbinary Jews through a third-gender grammar systematics for Hebrew, guided by our Torah and Talmud that teach us to rejoice that which cannot be neatly categorized."
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem",
        }}
      >
        <h1>Transliteration Tool</h1>
        <textarea
          style={{ direction:"rtl", maxWidth:"100%", width:"40rem", resize: "vertical" }}
          rows={5}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        {value ? (
          <HebrewBlock>{value}</HebrewBlock>
        ) : (
          <p>
            Type or paste hebrew in the box above and it will be transliterated
            here.
          </p>
        )}
      </div>
    </Layout>
  );
}

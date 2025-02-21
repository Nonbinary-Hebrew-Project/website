import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useCookies } from "react-cookie";

import styles from "./index.module.css";
import { useEffect, useState } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [translate, setTranslate] = useState();
  const [cookies, setCookie] = useCookies(["nbhp_transliterate"]);

  useEffect(() => {
    const handleResize = () => {
      setTranslate(window.nbhp_transliterate);
    };

    window.addEventListener("nbhp_transliterate", handleResize);

    return () => {
      window.removeEventListener("nbhp_transliterate", handleResize);
    };
  }, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          {cookies.nbhp_transliterate}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/nouns"
          >
            {"Get started ->"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="We are building a bigger tent for nonbinary Jews through a third-gender grammar systematics for Hebrew, guided by our Torah and Talmud that teach us to rejoice that which cannot be neatly categorized."
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}

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
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        
      <iframe
        src="https://donate.mazloweb.com/donate/CRcBKhLb8raLJVm3AstCV1"
        height="480"
        width="450"
        style={{border: "none"}}
        sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
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

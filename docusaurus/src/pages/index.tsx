import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useCookies } from "react-cookie";

import styles from "./index.module.css";
import { useEffect, useState } from "react";
import featuredContentData from "@site/config/featured-content.json";
import homepageHeaderData from "@site/config/homepage-header.json";

function HomepageHeader() {
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {homepageHeaderData.title}
        </Heading>
        <img src={homepageHeaderData.heroImage} alt={homepageHeaderData.heroImageAlt}/>
        <p className="hero__subtitle">{homepageHeaderData.subtitle}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={homepageHeaderData.ctaLink}
          >
            {homepageHeaderData.ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeaturedContent() {
  return (
    <div className={styles.featuredContentContainer}>
      {featuredContentData.highlightedContent.map((item, index) => (
        <div key={index} className={styles.featuredContentItem}>
          <img src={item.image} alt={item.headline} className={styles.featuredContentImage} />
          <div className={styles.featuredContentText}>
            <h3>{item.headline}</h3>
            <p>{item.description}</p>
            <Link 
              to={item.ctaLink} 
              className="button button--primary"
            >
              {item.ctaText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
    title={`${siteConfig.title}`}
    description="We are building a bigger tent for nonbinary Jews through a third-gender grammar systematics for Hebrew, guided by our Torah and Talmud that teach us to rejoice that which cannot be neatly categorized."
    >
      <main>
        <HomepageHeader />
        {!!featuredContentData.highlightedContent.length
          && <FeaturedContent />}
      </main>
    </Layout>
  );
}

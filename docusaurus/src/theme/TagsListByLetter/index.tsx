import React from "react";
import {
  listTagsByLetters,
  type TagLetterEntry,
} from "@docusaurus/theme-common";
import { TagsListItem } from "@docusaurus/utils";
import Tag from "@theme/Tag";
import type { Props } from "@theme/TagsListByLetter";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function TagLetterEntryItem({ letterEntry }: { letterEntry: TagLetterEntry }) {
  return (
    <article>
      <Heading as="h2" id={letterEntry.letter}>
        {letterEntry.letter.length ? letterEntry.letter : "Uncategorized"}
      </Heading>
      <ul className="padding--none">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}

export default function TagsListByLetter({ tags }: Props): JSX.Element {
  const tagsByCategory: { [key: string]: TagsListItem[] } = {};
  tags.forEach((item: TagsListItem) => {
    const [tag, category] = item.label.split(":").reverse();
    if (!tagsByCategory[category ?? ""]) tagsByCategory[category ?? ""] = [];
    tagsByCategory[category ?? ""].push({ ...item, label: tag });
  });
  return (
    <section className="margin-vert--lg">
      {Object.keys(tagsByCategory)
        .sort((a, b) => (!a ? 1 : !b ? -1 : 0))
        .map((key) => (
          <TagLetterEntryItem
            key={key}
            letterEntry={{ letter: key, tags: tagsByCategory[key] }}
          />
        ))}
    </section>
  );
}

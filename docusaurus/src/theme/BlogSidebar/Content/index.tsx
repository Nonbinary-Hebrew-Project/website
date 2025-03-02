import React, { memo, type ReactNode } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import type { Props } from "@theme/BlogSidebar/Content";

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  const themeConfig = useThemeConfig();
  if (themeConfig.blog.sidebar.groupByYear) {
    return (
      <>
        <ListComponent
          items={items.sort((a, b) => a.title.localeCompare(b.title))}
        />
      </>
    );
  } else {
    return <ListComponent items={items} />;
  }
}

export default memo(BlogSidebarContent);

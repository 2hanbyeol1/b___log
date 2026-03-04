import { isFullBlock, isFullPage } from "@notionhq/client";

import { UnExpectedItemError } from "@/lib/errors/notion";
import notion from "@/lib/notion/client";

import { getRequiredEnv } from "../env";

import { getPostPageProperties } from "./get-property";

export async function fetchAllBlogPostList() {
  const { results } = await notion.dataSources.query({
    data_source_id: getRequiredEnv("DATA_SOURCE_ID"),
    filter: {
      and: [
        {
          property: "공개 여부",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "생성 일시",
        direction: "descending",
      },
    ],
  });

  const posts = [];

  for (const result of results) {
    if (!isFullPage(result)) throw new UnExpectedItemError(result, "page");

    const properties = getPostPageProperties(result.properties);

    if (!properties.title.trim()) {
      console.log("UnExpected Item: Title is empty", result);
      continue;
    }

    posts.push({
      id: result.id,
      ...properties,
    });
  }

  return posts;
}

export async function fetchBlogPostById(id: string) {
  const page = await notion.pages.retrieve({
    page_id: id,
  });

  if (!isFullPage(page)) throw new UnExpectedItemError(page, "page");

  const properties = getPostPageProperties(page.properties);

  return {
    id: page.id,
    ...properties,
  };
}

export async function fetchChildBlocksById(id: string) {
  const { results } = await notion.blocks.children.list({
    block_id: id,
  });

  return results.filter((block) => isFullBlock(block));
}

export type HeadingItem = {
  id: string;
  type: "heading_1" | "heading_2" | "heading_3";
  text: string;
};

async function collectHeadings(blockId: string): Promise<HeadingItem[]> {
  const blocks = await fetchChildBlocksById(blockId);
  const headings: HeadingItem[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "heading_1":
        headings.push({
          id: block.id,
          type: "heading_1",
          text: block.heading_1.rich_text.map((t) => t.plain_text).join(""),
        });
        break;
      case "heading_2":
        headings.push({
          id: block.id,
          type: "heading_2",
          text: block.heading_2.rich_text.map((t) => t.plain_text).join(""),
        });
        break;
      case "heading_3":
        headings.push({
          id: block.id,
          type: "heading_3",
          text: block.heading_3.rich_text.map((t) => t.plain_text).join(""),
        });
        break;
      default:
        break;
    }

    if (block.has_children) {
      const childHeadings = await collectHeadings(block.id);
      headings.push(...childHeadings);
    }
  }

  return headings;
}

export async function fetchHeadingBlocksByPageId(
  pageId: string,
): Promise<HeadingItem[]> {
  return collectHeadings(pageId);
}

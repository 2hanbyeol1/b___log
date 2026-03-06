import { Client } from "@notionhq/client";

import { getRequiredEnv } from "@/utils/env";

let count = 0;

const notion = new Client({
  auth: getRequiredEnv("NOTION_TOKEN"),
  fetch: (url, options) => {
    console.log(`${++count} Notion API Request:`, url);
    return fetch(url, options);
  },
});

export default notion;

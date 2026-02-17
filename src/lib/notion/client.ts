import { Client } from "@notionhq/client";

import { getRequiredEnv } from "@/utils/env";

const notion = new Client({
  auth: getRequiredEnv("NOTION_TOKEN"),
});

export default notion;

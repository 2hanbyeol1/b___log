import fs from "fs";
import path from "path";

import { fetchAllBlogPostList } from "@/utils/notion/fetch-item";

import "dotenv/config";

async function downloadImage(
  url: string,
  folderPath: string = "public/image",
  filePath: string,
) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  const fullPath = path.join(process.cwd(), folderPath, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, Buffer.from(buffer));
}

const THUMBNAIL_FOLDER_PATH = "/image/thumbnail";

async function main() {
  const posts = await fetchAllBlogPostList();

  for (const post of posts) {
    await downloadImage(
      post.thumbnail.url,
      "public" + THUMBNAIL_FOLDER_PATH,
      `${post.id}.png`,
    );
    post.thumbnail.url = `${THUMBNAIL_FOLDER_PATH}/${post.id}.png`;
  }

  const postsPath = path.join(process.cwd(), "public/data/posts.json");
  fs.mkdirSync(path.dirname(postsPath), { recursive: true });
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));
}

main();

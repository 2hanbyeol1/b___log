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

  fs.writeFileSync(
    path.join(process.cwd(), folderPath, filePath),
    Buffer.from(buffer),
  );
}

const THUMBNAIL_FOLDER_PATH = "/image/thumbnail";

async function main() {
  const posts = await fetchAllBlogPostList();

  posts.map(async (post) => {
    await downloadImage(
      post.thumbnail.url,
      "public" + THUMBNAIL_FOLDER_PATH,
      `${post.id}.png`,
    );

    return {
      ...post,
      thumbnail: {
        ...post.thumbnail,
        url: `${THUMBNAIL_FOLDER_PATH}/${post.id}.png`,
      },
    };
  });

  for (const post of posts) {
    await downloadImage(
      post.thumbnail.url,
      "public" + THUMBNAIL_FOLDER_PATH,
      `${post.id}.png`,
    );
    post.thumbnail.url = `${THUMBNAIL_FOLDER_PATH}/${post.id}.png`;
  }

  fs.writeFileSync("./public/data/posts.json", JSON.stringify(posts, null, 2));
}

main();

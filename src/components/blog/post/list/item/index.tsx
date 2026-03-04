import Link from "next/link";

import { PATH } from "@/lib/constants/path";
import { BlogPost } from "@/lib/types/post";

import Tag from "./tag";
import Thumbnail from "./thumbnail";

function BlogListItem({ id, thumbnail, title, summary, tags }: BlogPost) {
  return (
    <Link
      href={PATH.BLOG(id, true)}
      className="group max-mobile:flex-col mobile:gap-8 flex items-center gap-4"
    >
      <Thumbnail
        className="mobile:w-48 h-full w-full shrink-0"
        imageClassName="group-hover:scale-110 transition-transform duration-300"
        thumbnail={thumbnail}
      />

      <div className="w-full">
        <h2 className="group-hover:text-primary mb-1.5 text-2xl font-medium">
          {title}
        </h2>
        <p className="mb-4 text-base text-gray-500">{summary}</p>

        <div className="flex items-center gap-2">
          {tags.map((tag, idx) => (
            <Tag key={`home-tag-${idx}`} tag={tag} size="sm" />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default BlogListItem;

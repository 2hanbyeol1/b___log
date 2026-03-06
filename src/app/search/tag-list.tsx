import Tag from "@/components/blog/post/list/item/tag";
import Button from "@/components/common/button";
import { PATH } from "@/lib/constants/path";
import { BlogPost } from "@/lib/types/post";

interface TagListProps {
  tags: BlogPost["tags"][number][];
}

function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tags.map((tag) => (
        <Button key={tag} href={PATH.SEARCH_TAG(tag)}>
          <Tag tag={tag} interactable />
        </Button>
      ))}
    </div>
  );
}

export default TagList;

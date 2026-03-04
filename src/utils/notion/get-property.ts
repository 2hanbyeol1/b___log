import { PageObjectResponse } from "@notionhq/client";

import { BlogPost } from "@/lib/types/post";

export const getPostPageProperties = (
  property: PageObjectResponse["properties"],
): Omit<BlogPost, "id"> => {
  return {
    title: getTextByPageProperty(property["제목"]),
    summary: getTextByPageProperty(property["요약"]),
    thumbnail: getFilesByPageProperty(property["썸네일"])[0],
    tags: getArrayByPageProperty(property["태그"]) ?? [],
    created_at: getTextByPageProperty(property["생성 일시"]),
    isPublic: getCheckboxByPageProperty(property["공개 여부"]),
  };
};

export const getTextByPageProperty = ({
  type,
  ...props
}: PageObjectResponse["properties"][string]) => {
  if (type === "title" && "title" in props)
    return props.title.map((text) => text.plain_text).join("");
  if (type === "rich_text" && "rich_text" in props)
    return props.rich_text.map((text) => text.plain_text).join("");
  if (type === "created_time" && "created_time" in props)
    return props.created_time;
  return "";
};

export const getDateByPageProperty = ({
  type,
  ...props
}: PageObjectResponse["properties"][string]) => {
  if (type === "created_time" && "created_time" in props)
    return new Date(props.created_time);
  return null;
};

export const getArrayByPageProperty = ({
  type,
  ...props
}: PageObjectResponse["properties"][string]) => {
  if (type === "multi_select" && "multi_select" in props)
    return props.multi_select.map((item) => item.name);
  return [];
};

export const getFilesByPageProperty = ({
  type,
  ...props
}: PageObjectResponse["properties"][string]) => {
  if (type === "files" && "files" in props)
    return props.files.map((file) => ({
      url: file.type === "file" ? file.file.url : file.external.url,
      name: file.name,
    }));
  return [];
};

export const getCheckboxByPageProperty = ({
  type,
  ...props
}: PageObjectResponse["properties"][string]) => {
  if (type === "checkbox" && "checkbox" in props) return props.checkbox;
  return false;
};

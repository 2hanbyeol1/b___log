import { ElementType, Fragment, PropsWithChildren, ReactNode } from "react";
import { BlockObjectResponse } from "@notionhq/client";

import { fetchChildBlocksById } from "@/utils/notion/fetch-item";

import List from "./list/bulleted-list";
import ListItem from "./list/list-item";
import TableData from "./table/TableData";
import TableRow from "./table/TableRow";
import Callout from "./callout";
import Code from "./code";
import Divider from "./divider";
import Heading from "./heading";
import ImageBlock from "./image-block";
import Paragraph from "./paragraph";
import Quote from "./quote";
import Table from "./table";
import Toggle from "./toggle";

interface WrapperBlockProps {
  blockType: string;
}

interface BlockProps {
  className?: string;
  block: BlockObjectResponse;
}

interface BlocksProps {
  blockId: string;
}

async function WrapperBlock({
  blockType,
  children,
}: PropsWithChildren<WrapperBlockProps>) {
  let WrapperElement: ElementType = Fragment;

  switch (blockType) {
    case "bulleted_list_item":
    case "numbered_list_item":
      WrapperElement = List;
      break;
  }

  return <WrapperElement blockType={blockType}>{children}</WrapperElement>;
}

async function Block({ block }: BlockProps) {
  let children = null;

  if (block.has_children) {
    children = <Blocks blockId={block.id} />;
  }

  switch (block.type) {
    case "heading_1":
      return (
        <Heading block={block} richText={block.heading_1.rich_text}>
          {children}
        </Heading>
      );
    case "heading_2":
      return (
        <Heading block={block} richText={block.heading_2.rich_text}>
          {children}
        </Heading>
      );
    case "heading_3":
      return (
        <Heading block={block} richText={block.heading_3.rich_text}>
          {children}
        </Heading>
      );
    case "paragraph":
      return (
        <Paragraph className="mt-6 mb-2 text-lg" block={block}>
          {children}
        </Paragraph>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return <ListItem block={block}>{children}</ListItem>;
    case "image":
      if (block.has_children)
        throw new Error(`Unexpected Item: ${block} is image, but has children`);
      return <ImageBlock className="mt-6 mb-2" block={block} />;
    case "code":
      return (
        <Code className="mt-6 mb-2" block={block}>
          {children}
        </Code>
      );
    case "quote":
      return (
        <Quote className="mt-6 mb-2" block={block}>
          {children}
        </Quote>
      );
    case "table":
      return <Table className="mt-6 mb-2">{children}</Table>;
    case "table_row":
      return (
        <TableRow key={block.id}>
          {block.table_row.cells.map((cell, idx) => (
            <TableData
              key={`td-${block.id}-${idx}`}
              id={block.id}
              richText={cell}
            />
          ))}
        </TableRow>
      );
    case "callout":
      return (
        <Callout className="mt-6 mb-2" block={block}>
          {children}
        </Callout>
      );
    case "toggle":
      return (
        <Toggle className="mt-6 mb-2" block={block}>
          {children}
        </Toggle>
      );
    case "divider":
      return <Divider className="my-6" />;
    default:
      console.error("아직 처리되지 않은 블럭", block);
      return children;
  }
}

async function Blocks({ blockId }: BlocksProps) {
  const childBlocks = await fetchChildBlocksById(blockId);

  const children: ReactNode[] = [];
  let list: ReactNode[] = [];
  let listType = "";

  childBlocks.forEach((childBlock) => {
    switch (childBlock.type) {
      case "bulleted_list_item":
      case "numbered_list_item":
        list.push(<Block key={childBlock.id} block={childBlock} />);
        listType = childBlock.type;
        return;
    }

    if (list.length > 0 && listType !== childBlock.type) {
      children.push(
        <WrapperBlock key={`${childBlock.id}-wrapper`} blockType={listType}>
          {list}
        </WrapperBlock>,
      );
      list = [];
    }

    children.push(<Block key={childBlock.id} block={childBlock} />);
  });

  // 남아있는 list 요소들 처리
  if (list.length > 0) {
    children.push(
      <WrapperBlock key={`last-wrapper`} blockType={listType}>
        {list}
      </WrapperBlock>,
    );
  }

  return children;
}

export default Blocks;

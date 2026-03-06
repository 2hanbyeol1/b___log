"use client";

import { cva } from "class-variance-authority";

import type { HeadingItem } from "@/utils/notion/fetch-item";

import TableOfContentsDesktop from "./desktop";
import TableOfContentsMobile from "./mobile";

export interface TableOfContentsProps {
  className?: string;
  headings: HeadingItem[];
}

export const listItemVariants = cva(
  "text-sm text-gray-700 hover:text-primary",
  {
    variants: {
      blockType: {
        heading_1: "pl-0 laptop:pl-2",
        heading_2: "pl-3 laptop:pl-4",
        heading_3: "pl-6 laptop:pl-6",
      },
    },
  },
);

function TableOfContents(props: TableOfContentsProps) {
  return (
    <>
      <TableOfContentsMobile {...props} />
      <TableOfContentsDesktop {...props} />
    </>
  );
}

export default TableOfContents;

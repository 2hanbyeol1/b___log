"use client";

import { useState } from "react";
import { cva } from "class-variance-authority";
import { TableOfContentsIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import type { HeadingItem } from "@/utils/notion/fetch-item";

interface TableOfContentsProps {
  className?: string;
  headings: HeadingItem[];
}

const listItemVariants = cva("text-sm text-gray-700 hover:text-primary", {
  variants: {
    blockType: {
      heading_1: "pl-0",
      heading_2: "pl-3",
      heading_3: "pl-6",
    },
  },
});

function TableOfContents({ className, headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (headings.length === 0) return null;

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "rounded-lg bg-white shadow-lg",
        isOpen ? "px-3 py-6" : "p-2.5",
        className,
      )}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      onClick={toggle}
    >
      {isOpen ? (
        <nav>
          <ul className="space-y-2">
            {headings.map((item) => (
              <li
                key={item.id}
                className={listItemVariants({ blockType: item.type })}
              >
                <a href={`#${item.text}`} className="py-0.5 no-underline">
                  {item.text || "(제목 없음)"}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <TableOfContentsIcon className="size-6" />
      )}
    </div>
  );
}

export default TableOfContents;

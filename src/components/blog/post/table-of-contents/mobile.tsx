"use client";

import { useState } from "react";
import { TableOfContentsIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { listItemVariants, TableOfContentsProps } from ".";

function TableOfContentsMobile({ className, headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (headings.length === 0) return null;

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "laptop:hidden rounded-lg bg-white shadow-lg",
        isOpen ? "w-full px-3 py-6" : "w-fit p-2.5",
        className,
      )}
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

export default TableOfContentsMobile;

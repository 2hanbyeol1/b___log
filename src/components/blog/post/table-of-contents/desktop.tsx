import { cn } from "@/utils/cn";

import { listItemVariants, TableOfContentsProps } from ".";

function TableOfContentsDesktop({ className, headings }: TableOfContentsProps) {
  return (
    <nav
      className={cn(
        "laptop:block hidden border-l-2 border-gray-200",
        className,
      )}
    >
      <ul className="space-y-2">
        {headings.map((item) => (
          <li
            key={item.id}
            className={cn(
              listItemVariants({ blockType: item.type }),
              "hover:border-primary -ml-0.5 border-l-2 border-transparent transition-colors",
            )}
          >
            <a href={`#${item.text}`} className="py-0.5 no-underline">
              {item.text || "(제목 없음)"}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContentsDesktop;

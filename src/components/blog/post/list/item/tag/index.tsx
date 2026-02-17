import { cva, VariantProps } from "class-variance-authority";

interface TagProps extends VariantProps<typeof tagVariants> {
  tag: string;
}

const tagVariants = cva("rounded-md bg-gray-100", {
  variants: {
    size: {
      sm: "text-sm px-3 py-1",
      base: "text-base px-4 py-2",
    },
    interactable: {
      true: "cursor-pointer hover:bg-gray-200",
      false: "",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

function Tag({ tag, size, interactable }: TagProps) {
  return <span className={tagVariants({ size, interactable })}>{tag}</span>;
}

export default Tag;

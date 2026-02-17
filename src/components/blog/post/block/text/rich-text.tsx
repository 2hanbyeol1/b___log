import { RichTextItemResponse } from "@notionhq/client";

import Text from ".";

interface RichTextProps {
  className?: string;
  id: string;
  richText: RichTextItemResponse[];
}

function RichText({ className, id, richText }: RichTextProps) {
  return (
    <>
      {richText.map((text, idx) => (
        <Text key={`rt-${id}-${idx}`} className={className} text={text} />
      ))}
    </>
  );
}

export default RichText;

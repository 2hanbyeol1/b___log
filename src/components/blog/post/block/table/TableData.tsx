import { RichTextItemResponse } from "@notionhq/client";

import RichText from "../text/rich-text";

interface TableDataProps {
  id: string;
  richText: RichTextItemResponse[];
}

function TableData({ id, richText }: TableDataProps) {
  return (
    <td className="border border-gray-200 px-3 py-2 whitespace-nowrap last:whitespace-normal">
      <RichText id={id} richText={richText} />
    </td>
  );
}

export default TableData;

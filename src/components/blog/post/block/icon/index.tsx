import { CalloutBlockObjectResponse } from "@notionhq/client";

interface IconProps {
  icon: NonNullable<CalloutBlockObjectResponse["callout"]["icon"]>;
}

function Icon({ icon }: IconProps) {
  if (icon.type === "emoji") {
    return <div>{icon.emoji}</div>;
  }
  console.error("아직 처리되지 않은 아이콘", icon);
  return null;
}

export default Icon;

import {
  DataSourceObjectResponse,
  PageObjectResponse,
  PartialDataSourceObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client";

export type NotionItemType =
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDataSourceObjectResponse
  | DataSourceObjectResponse;

export type NotionItemStrType =
  | "page"
  | "partialPage"
  | "partialDataSource"
  | "dataSource";
/**
 * Notion API 호출 결과에 예상치 못한 아이템이 포함되었을 때 발생하는 에러
 */
export class UnExpectedItemError extends Error {
  readonly item: NotionItemType;
  readonly expectedType: NotionItemStrType;

  constructor(item: NotionItemType, expectedType: NotionItemStrType) {
    super(
      `Notion API 호출 결과에 예상치 못한 아이템이 포함되었습니다: ${item} is not a ${expectedType}.`,
    );
    this.name = "UnExpectedItemError";
    this.item = item;
    this.expectedType = expectedType;

    Object.setPrototypeOf(this, UnExpectedItemError.prototype);
  }
}

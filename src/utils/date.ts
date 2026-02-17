/**
 * 날짜 문자열을 포맷팅합니다.
 * @param date 날짜 문자열
 * @param separator 날짜 구분자
 * @returns 날짜 문자열
 */
export const formatDate = (date: Date | string, separator?: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return `${year}${separator ?? "년 "}${month}${separator ?? "월 "}${day}${separator ? "" : "일"}`;
};

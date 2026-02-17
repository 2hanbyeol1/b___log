/**
 * 문자열을 정규화하는 함수 (공백 제거, 소문자로 변환)
 * @param str 문자열
 * @returns 정규화된 문자열
 */
export const normalizeString = (str: string) => {
  return str.split(" ").join("").toLowerCase();
};

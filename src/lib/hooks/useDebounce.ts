import { useEffect, useState } from "react";

/**
 * @param value 디바운스 처리할 값 (input 등)
 * @param delay 지연 시간 (ms)
 */
function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 2. delay 시간이 지난 후에 값을 업데이트하는 타이머 설정
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 3. Cleanup 함수: value가 바뀌거나 컴포넌트가 언마운트되면 이전 타이머 취소
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay, value]); // value나 delay가 변경될 때마다 실행

  return debouncedValue;
}

export default useDebounce;

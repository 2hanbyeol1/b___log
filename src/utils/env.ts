import { EnvMissingError } from "@/lib/errors/env";

/**
 * 필수 환경 변수를 안전하게 가져옵니다.
 * 값이 없으면 EnvMissingError를 던집니다.
 */
export function getRequiredEnv(key: string): string {
  const value = process.env[key];

  if (!value || value.trim() === "") {
    console.log({ window, key });
    console.trace();

    throw new EnvMissingError(key);
  }

  return value;
}

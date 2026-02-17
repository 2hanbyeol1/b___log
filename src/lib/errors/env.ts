/**
 * 환경 변수가 설정되지 않았을 때 발생하는 에러
 */
export class EnvMissingError extends Error {
  readonly envKey: string;

  constructor(envKey: string) {
    super(
      `환경 변수가 설정되지 않았습니다: ${envKey}. .env 파일을 확인해 주세요.`,
    );
    this.name = "EnvMissingError";
    this.envKey = envKey;
    Object.setPrototypeOf(this, EnvMissingError.prototype);
  }
}

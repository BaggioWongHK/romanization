enum ERROR_KEYS {
  INSUFFICIENT_ARGS = 'INSUFFICIENT_ARGS',
  FILE_NOT_EXISTS = 'FILE_NOT_EXISTS',
}

type ErrorMap = { [M in ERROR_KEYS]: (...args: (string | number)[]) => string };

export const ERRORS: ErrorMap = {
  [ERROR_KEYS.INSUFFICIENT_ARGS]: argsLength =>
    `You have supplied ${argsLength} arguments. Please try again.`,
  [ERROR_KEYS.FILE_NOT_EXISTS]: filePath =>
    `The file you specified at ${filePath} doesn't exist. Please try again.`,
};

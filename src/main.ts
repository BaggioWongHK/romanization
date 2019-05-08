import { readFile } from 'fs';

import { LANG_ROMANIZATION_MAP, SUPPORTED_FILE_EXT } from './main.constants';
import {
  srcLangExists,
  targetRomanizationExists,
  isFileTypeSupported,
} from './main.utils';
import { ERRORS } from './error.constants';

// TODO: Move this to README
// node program source-lang target-romanization file-path out-path
// node program zh-HK jyutping src/main.ts .
// out-path is optional
const main = (): void => {
  const args = process.argv;
  const argsLength = args.length;

  if (argsLength < 5 || argsLength > 6) {
    throw new Error(ERRORS.INSUFFICIENT_ARGS(argsLength));
  }

  /* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
  const [, , srcLang, targetRomanization, filePath, outPath = '.'] = args;
  /* eslint-enable no-unused-vars */

  readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      throw new Error(ERRORS.FILE_NOT_EXISTS(filePath));
    }

    // Check that the inputs are correct
    const inputsValid =
      srcLangExists(srcLang, LANG_ROMANIZATION_MAP) &&
      targetRomanizationExists(targetRomanization, LANG_ROMANIZATION_MAP) &&
      isFileTypeSupported(filePath, SUPPORTED_FILE_EXT);

    if (inputsValid) {
      /* eslint-disable max-len */
      // run all web scrapers to update romanization dictionary (target language -> romanization)
      // load dictionary for that {language, romanization} pair
      // read the input file
      // run the romanization conversion algorithm
      // return outputted file in the specified directory (current directory if not)
      /* eslint-enable max-len */
    }
  });
};

main();

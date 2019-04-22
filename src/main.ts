import { readFile } from 'fs';

import { LANG_ROMANIZATION_MAP, SUPPORTED_FILE_EXT } from './main.constants';
import {
  srcLangExists,
  targetRomanizationExists,
  isFileTypeSupported
} from './main.utils';

// TODO: Move this to README
// node program source-lang target-romanization file-path out-path
// node program zh-HK jyutping src/main.ts .
// out-path is optional
const main = () => {
  const args = process.argv;
  const argsLength = args.length;

  if (argsLength < 5 || argsLength > 6) {
    throw `You have supplied ${argsLength} arguments. Please try again.`;
  }

  const [, , srcLang, targetRomanization, filePath, outPath = '.'] = args;

  readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      throw `The file you specified at ${filePath} doesn't exist. Please try again.`;
    }

    // Check that the inputs are correct
    const inputsValid =
      srcLangExists(srcLang, LANG_ROMANIZATION_MAP) &&
      targetRomanizationExists(targetRomanization, LANG_ROMANIZATION_MAP) &&
      isFileTypeSupported(filePath, SUPPORTED_FILE_EXT);

    if (inputsValid) {
      // run all web scrapers to update romanization dictionary (target language -> romanization)
      // load dictionary for that {language, romanization} pair
      // read the input file
      // run the romanization conversion algorithm
      // return outputted file in the specified directory (current directory if not)
    }
  });
};

main();

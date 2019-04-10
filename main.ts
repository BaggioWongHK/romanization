import { equals } from 'ramda';

type LangRomanizationMap<V> = {
  [key: string]: V[];
};

// ISO 639-2
const LANG_ROMANIZATION_MAP: LangRomanizationMap<string> = {
  'zh-HK': ['jyutping']
};

const SUPPORTED_FILE_EXT: string[] = ['txt'];

const srcLangExists = (
  srcLang: string,
  langRomanizationMap: LangRomanizationMap<string>
) => Object.keys(langRomanizationMap).includes(srcLang);

const targetRomanizationExists = (
  targetRomanization: string,
  langRomanizationMap: LangRomanizationMap<string>
) =>
  Object.keys(langRomanizationMap)
    .map(srcLang => langRomanizationMap[srcLang].includes(targetRomanization))
    .some(hasTargetRomanization => equals(true)(hasTargetRomanization));

const isFileValid = (filePath: File, supportedFileExtensions: string[]) =>
  supportedFileExtensions
    .map(ext => filePath.type.includes(ext))
    .some(isSupported => equals(true)(isSupported));

// node program source-lang target-romanization file-path
const main = () => {
  const args = process.argv;

  if (args.length !== 5) {
    throw `You have supplied only ${args.length} arguments. Please try again.`;
  }

  const [
    ,
    ,
    srcLang = 'zh-HK',
    targetRomanization = 'jyutping',
    filePath = '.'
  ] = args;

  // Check that the inputs are correct with utility functions
};

main();

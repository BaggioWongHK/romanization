import { LangRomanizationMap } from './main.types';

export type SrcLangExistsFn = (
  srcLang: string,
  langRomanizationMap: LangRomanizationMap<string>
) => ReturnType<string[]['includes']>;

export type TargetRomanizationExistsFn = (
  targetRomanization: string,
  langRomanizationMap: LangRomanizationMap<string>
) => ReturnType<string[]['some']>;

export type IsFileTypeSupportedFn = (
  filePath: string,
  supportedFileExtensions: string[]
) => ReturnType<string[]['some']>;

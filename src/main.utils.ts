import { LangRomanizationMap } from './main.types';
import { equals } from 'ramda';
import { extname } from 'path';

export const srcLangExists = (
  srcLang: string,
  langRomanizationMap: LangRomanizationMap<string>
) => Object.keys(langRomanizationMap).includes(srcLang);

export const targetRomanizationExists = (
  targetRomanization: string,
  langRomanizationMap: LangRomanizationMap<string>
) =>
  Object.keys(langRomanizationMap)
    .map(srcLang => langRomanizationMap[srcLang].includes(targetRomanization))
    .some(hasTargetRomanization => equals(true)(hasTargetRomanization));

export const isFileTypeSupported = (
  filePath: string,
  supportedFileExtensions: string[]
) =>
  supportedFileExtensions
    .map(ext => extname(filePath).includes(ext))
    .some(isSupported => equals(true)(isSupported));

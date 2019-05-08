import { equals } from 'ramda';
import { extname } from 'path';
import {
  SrcLangExistsFn,
  TargetRomanizationExistsFn,
  IsFileTypeSupportedFn,
} from './main.utils.types';

export const srcLangExists: SrcLangExistsFn = (srcLang, langRomanizationMap) =>
  Object.keys(langRomanizationMap).includes(srcLang);

export const targetRomanizationExists: TargetRomanizationExistsFn = (
    targetRomanization,
    langRomanizationMap
) =>
  Object.keys(langRomanizationMap)
      .map(srcLang => langRomanizationMap[srcLang].includes(targetRomanization))
      .some(hasTargetRomanization => equals(true)(hasTargetRomanization));

export const isFileTypeSupported: IsFileTypeSupportedFn = (
    filePath,
    supportedFileExtensions
) =>
  supportedFileExtensions
      .map(ext => extname(filePath).includes(ext))
      .some(isSupported => equals(true)(isSupported));

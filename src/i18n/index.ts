import { en } from './translations';
import { pl } from './translations';

export { default as GENERAL } from './messages/general';
export { default as OBJECTIVES } from './messages/objectives';

export enum Language {
  EN = 'en',
  PL = 'pl',
};

export type Translated<T> = {
  [Language.EN]: T;
  [Language.PL]: T;
}

export const translations: Translated<{[key: string]: string}> = {
  [Language.EN]: en,
  [Language.PL]: pl,
};


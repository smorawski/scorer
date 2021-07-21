import { en } from './translations';

export { default as GENERAL } from './messages/general';
export { default as OBJECTIVES } from './messages/objectives';

export enum Language {
  EN = 'en',
};

export type Translated<T> = {
  [Language.EN]: T;
}

export const translations: Translated<{[key: string]: string}> = {
  [Language.EN]: en,
};


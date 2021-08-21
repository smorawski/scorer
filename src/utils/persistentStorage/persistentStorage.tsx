import { Objective } from '../../resources/types';
import { Language } from '../../i18n';

export interface PersistentStorage {
  getLanguage(): Language;
  setLanguage(language: Language): void;
  getObservedObjectivesIds(): Array<string>;
  setObservedObjectivesIds(objectives: Array<string>): void;
}

const OBSERVED_OBJECTIVES_KEY = 'OBSERVED_OBJECTIVES';
const LANGUAGE_KEY = 'LANGUAGE';

export default {
  setLanguage: (language: Language) => {
    try {
      window?.localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.log(error);
    }
  },
  getLanguage: () => {
    try {
      return window?.localStorage.getItem(LANGUAGE_KEY) || Language.EN;
    } catch (error) {
      console.log(error);
      return Language.EN;
    }
  },
  getObservedObjectivesIds: (): Array<string> => {
    try {
      const objectivesString = window?.localStorage.getItem(OBSERVED_OBJECTIVES_KEY);
      if (!objectivesString) {
        return [];
      }
      return JSON.parse(objectivesString) as Array<string> ;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  setObservedObjectivesIds: (objectives: Array<string>) => {
    try {
      const objectivesString = JSON.stringify(objectives);
      window?.localStorage.setItem(OBSERVED_OBJECTIVES_KEY, objectivesString);
    } catch (error) {
      console.log(error);
    }
  },
} as PersistentStorage;

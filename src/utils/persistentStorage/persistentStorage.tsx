import { Objective } from '../../resources/types';
import { Language } from '../../i18n';

export interface PersistentStorage {
  getLanguage(): Language;
  setLanguage(language: Language): void;
  getObservedObjectives(): Array<Objective>;
  setObservedObjectives(objectives: Array<Objective>): void;
}

const OBSERVED_OBJECTIVES_KEY = 'OBSERVED_OBJECTIVES_KEY';
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
  getObservedObjectives: (): Array<Objective> => {
    try {
      const objectivesString = window?.localStorage.getItem(OBSERVED_OBJECTIVES_KEY);
      if (!objectivesString) {
        return [];
      }
      return JSON.parse(objectivesString) as Array<Objective> ;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  setObservedObjectives: (objectives: Array<Objective>) => {
    try {
      const objectivesString = JSON.stringify(objectives);
      window?.localStorage.setItem(OBSERVED_OBJECTIVES_KEY, objectivesString);
    } catch (error) {
      console.log(error);
    }
  },
} as PersistentStorage;

import { Objective } from './types';
import { Objectives } from './objectives';
import { Language, translations as allTranslations } from '../i18n';

function _injectTranslations(objectives: Array<Objective>, language: Language): Array<Objective> {
  const translations  = allTranslations[language];
  return objectives.map(
    (objective: Objective): Objective => ({
      ...objective,
      name: translations[objective.name],
      condition: translations[objective.condition],
      description: translations[objective.description],
    }) as Objective,
  );
};
export default class ResourcesProvider {
  static getObjectives(language: Language = Language.EN): Array<Objective> {
    return _injectTranslations(Objectives, language);
  }
}

export type { Objective } from './types';

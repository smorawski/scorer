import { Objective } from './types';
import { Objectives } from './objectives';

export default class ResourcesProvider {
  static getObjectives(): Array<Objective> {
    return Objectives;
  }
}

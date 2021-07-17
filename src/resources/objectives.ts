import { Objective, ObjectiveType, GameExpansion } from './types';

export const Objectives : Array<Objective> = [
  // Public 1

  //// Basic
  {
    name: 'cornerTheMarket',
    condition: 'cornerTheMarket.condition',
    points: 1,
    description: 'cornerTheMarket.description',
    type: ObjectiveType.Public1,
    expansion: GameExpansion.Basic,
  },
  {
    name: 'negotiateTradeRoutes',
    condition: 'negotiateTradeRoutes.condition',
    points: 1,
    description: 'negotiateTradeRoutes.description',
    type: ObjectiveType.Public1,
    expansion: GameExpansion.Basic,
  },
  //// PoK

  // Public 2
  //// Basic
  {
    name: 'masterTheSciences',
    condition: 'masterTheSciences.condition',
    points: 2,
    description: 'masterTheSciences.description',
    type: ObjectiveType.Public2,
    expansion: GameExpansion.Basic,
  },
  //// PoK
  {
    name: 'achieveSupremacy',
    condition: 'achieveSupremacy.condition',
    points: 2,
    description: 'achieveSupremacy.description',
    type: ObjectiveType.Public2,
    expansion: GameExpansion.ProphecyOfKings,
  },

  // Secrets
  //// Basic
  {
    name: 'destroyTheirGreatestShip',
    condition: 'destroyTheirGreatestShip.condition',
    points: 1,
    description: 'destroyTheirGreatestShip.description',
    type: ObjectiveType.Secret,
    expansion: GameExpansion.Basic,
  },
  //// PoK
  {
    name: 'becomeAMartyr',
    condition: 'becomeAMartyr.condition',
    points: 1,
    description: 'becomeAMartyr.description',
    type: ObjectiveType.Secret,
    expansion: GameExpansion.ProphecyOfKings,
  },
];

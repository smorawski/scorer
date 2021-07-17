export enum ObjectiveType {
  Public1,
  Public2,
  Secret,
};

export enum GameExpansion {
  Basic,
  ProphecyOfKings,
};

export type Objective = {
  name: String;
  condition: String;
  points: Number;
  description: String;
  type: ObjectiveType;
  expansion: GameExpansion;
};

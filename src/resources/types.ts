export enum ObjectiveType {
  Public1 = "public1",
  Public2 = "public2",
  Secret = "secret",
};

export enum GamePhase {
  Action = "actionPhase",
  Agenda = "agendaPhase",
  Status = "statusPhase",
  Strategy = "strategyPhase",
};

export enum GameExpansion {
  Basic,
  ProphecyOfKings,
};

export type Objective = {
  id: string;
  name: string;
  phase: GamePhase;
  condition: string;
  points: number;
  description: string;
  type: ObjectiveType;
  expansion: GameExpansion;
};

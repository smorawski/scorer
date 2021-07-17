import { Objective as ObjectiveType } from '../resources/types';

type ObjectiveProps = {
  objective: ObjectiveType;
};

const Objective = ({ objective }: ObjectiveProps) => {
  return (
    <div>
      <span>{objective.name}</span>
      <span>{objective.condition}</span>
      <span>{objective.points}</span>
    </div>
  );
}

export default Objective;

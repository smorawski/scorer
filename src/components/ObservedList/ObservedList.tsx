import { Objective } from '../../resources/types';
import ActionableObjective from '../Components/Objective/ActionableObjective';
import EyeOffIcon from '../Components/Icons/EyeOff';
import styles  from './ObservedList.module.scss';

interface ObservedListProps {
  objectives: Array<Objective>,
  removeObjective(objective: Objective): void,
};

const ObservedList = ({ objectives, removeObjective }: ObservedListProps) => {
  return (
    <div className={styles.container}>
      {
        objectives.map(
          (objective: Objective) => <ActionableObjective key={objective.name} objective={objective} onAction={removeObjective} actionContent={<EyeOffIcon />} />
        )
      }
    </div>
  )
}

export default ObservedList;

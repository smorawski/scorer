import { FormattedMessage } from 'react-intl';
import { GENERAL } from '../../i18n';
import { Objective } from '../../resources/types';
import ActionableObjective from '../Components/Objective/ActionableObjective';
import EyeOffIcon from '../Components/Icons/EyeOff';
import styles  from './ObservedList.module.scss';

interface ObservedListProps {
  observedObjectives: Array<string>,
  allObjectives: Array<Objective>,
  removeObjective(objective: Objective): void,
  clearObjectives(): void;
};

const ObservedList = ({ observedObjectives, allObjectives, removeObjective, clearObjectives }: ObservedListProps) => {
  const objectives = allObjectives.reduce(
    (accumulator: Array<Objective>, current: Objective): Array<Objective> => {
      const observedIndex = observedObjectives.indexOf(current.id);
      if (observedIndex >= 0) {
        accumulator[observedIndex] = current;
        return accumulator;
      }
      return accumulator;
    },
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <button onClick={clearObjectives}><FormattedMessage id={GENERAL.CLEAR} /></button>
      </div>
      <div className={styles.list}>
        {
          objectives.map(
            (objective: Objective) => <ActionableObjective key={objective.name} objective={objective} onAction={removeObjective} actionContent={<EyeOffIcon />} />
          )
        }
        </div>
    </div>
  )
}

export default ObservedList;

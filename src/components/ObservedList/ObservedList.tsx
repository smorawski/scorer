import { FormattedMessage } from 'react-intl';
import { GENERAL } from '../../i18n';
import { Objective } from '../../resources/types';
import ActionableObjective from '../Components/Objective/ActionableObjective';
import EyeOffIcon from '../Components/Icons/EyeOff';
import styles  from './ObservedList.module.scss';

interface ObservedListProps {
  objectives: Array<Objective>,
  removeObjective(objective: Objective): void,
  clearObjectives(): void;
};

const ObservedList = ({ objectives, removeObjective, clearObjectives }: ObservedListProps) => {
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

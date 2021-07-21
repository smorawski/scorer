import { useState } from 'react';
import { Objective } from '../../resources/types';
import ActionableObjective from '../Components/Objective/ActionableObjective';
import Filters, { ObjectiveFilter } from '../Components/Filters/Filters';
import EyeIcon from '../Components/Icons/Eye';
import EyeOffIcon from '../Components/Icons/EyeOff';
import styles from './AllList.module.scss';

interface AllListProps {
  objectives: Array<Objective>;
  observedObjectives: Array<Objective>;
  observeCard: (objective: Objective) => void;
  removeCard: (objective: Objective)  => void;
}

const AllList = ({ objectives, observedObjectives, observeCard, removeCard } : AllListProps) => {
  const [filter, setFilter] = useState<ObjectiveFilter>({});

  const filteredObjectives = filterObjectives(objectives, filter);

  return (
    <div>
      <Filters onChange={(filter: ObjectiveFilter) => setFilter(filter) }/>
      <div className={styles.container}>
        {
          filteredObjectives.map(
            (objective: Objective) => {
              const isObserved = observedObjectives.some(({ name }) => objective.name === name);
              return isObserved
                ? <ActionableObjective key={objective.name} objective={objective} onAction={removeCard} actionContent={<EyeOffIcon />} />
                : <ActionableObjective key={objective.name} objective={objective} onAction={observeCard} actionContent={<EyeIcon />} />;
            }
          )
        }
      </div>
    </div>
  )
};

const filterObjectives = (objectives: Array<Objective>, filter: ObjectiveFilter): Array<Objective> => {
  return objectives.filter((objective) => {
    if (
      filter.text
      && !(
        objective.condition.toLowerCase().includes(filter.text.toLowerCase())
        || objective.name.toLowerCase().includes(filter.text.toLowerCase())
      )
    ){
      return false;
    }

    if (filter.expansions && filter.expansions.length > 0 && !filter.expansions.includes(objective.expansion)) {
      return false;
    }

    if (filter.types && filter.types.length > 0 && !filter.types.includes(objective.type)) {
      return false;
    }

    return true;
  });
};

export default AllList;

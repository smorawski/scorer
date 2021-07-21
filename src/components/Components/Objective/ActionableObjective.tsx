import Objective from './Objective'
import { Objective as ObjectiveDTO } from '../../../resources/types';

import styles from './ActionableObjective.module.scss';
import React from 'react';

interface ActionableObjectiveProps {
  objective: ObjectiveDTO,
  actionContent: React.ReactNode,
  onAction(objective: ObjectiveDTO): void,
};

const PreviewObjective = ({ objective, onAction, actionContent }: ActionableObjectiveProps) => {
  return (
    <div className={styles.wrapper}>
      <Objective objective={objective} />
      <button className={styles.button} onClick={() => onAction(objective)}>{actionContent}</button>
    </div>
  );
};

export default PreviewObjective;

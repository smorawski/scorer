import { FormattedMessage } from 'react-intl';
import { Objective as ObjectiveDTO, ObjectiveType } from '../../../resources/types';
import { GENERAL } from '../../../i18n';
import Public1 from '../../../images/public-1.png'
import Public2 from '../../../images/public-2.png'
import Secret from '../../../images/secret.png'

import styles from './Objective.module.scss';

type ObjectiveProps = {
  objective: ObjectiveDTO;
};

const ObjectiveBackgrounds = {
  [ObjectiveType.Public1]: Public1,
  [ObjectiveType.Public2]: Public2,
  [ObjectiveType.Secret]: Secret,
};

const ObjectiveClass = {
  [ObjectiveType.Public1]: styles.public1,
  [ObjectiveType.Public2]: styles.public2,
  [ObjectiveType.Secret]: styles.secret,
}

const Objective = ({ objective }: ObjectiveProps) => {
  const backgroundImage = ObjectiveBackgrounds[objective.type];
  const className =  ObjectiveClass[objective.type];
  return (
    <div className={`${styles.container} ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.header}>
        {objective.name}
      </div>
      <div className={styles.phase}>
        <FormattedMessage id={objective.phase} />
      </div>
      <div className={styles.condition}>
        {objective.condition}
      </div>
      <div className={styles.points}>
        {objective.points}
      </div>
      <div className={styles.pointsLabel}>
        <FormattedMessage id={GENERAL.VICTORY_POINTS} values={{ points: objective.points }} />
      </div>

    </div>
  );
}

export default Objective;

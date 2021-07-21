import { useState, ChangeEvent, useEffect } from 'react';
import { ObjectiveType, GameExpansion } from '../../../resources/types';

import styles from './Filters.module.scss';

export interface ObjectiveFilter {
  text?: string;
  types?: Array<ObjectiveType>;
  expansions?: Array<GameExpansion>;
}

interface FiltersProps {
  onChange: (filter: ObjectiveFilter) => void;
}

const Filters = ({ onChange }: FiltersProps) => {
  const [filter, setFilter] = useState<ObjectiveFilter>({});

  const setText = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, text: event.target.value });
  };

  const setTypes = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilter({
        ...filter,
        types: [
          ...(filter.types || []),
          event.target.value as ObjectiveType,
        ],
      });
    } else {
      setFilter({
        ...filter,
        types: (filter.types || []).filter(
          (type) => type !== (event.target.value as ObjectiveType),
        ),
      });
    }
  }

  const includePoK = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked)  {
      setFilter({
        ...filter,
        expansions: [],
      });
    } else {
      setFilter({
        ...filter,
        expansions: [GameExpansion.Basic],
      });
    }
  };

  useEffect(
    () => {
      onChange(filter);
    },
    [filter]
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.text}
        onChange={setText}
        value={filter.text || ''}
      />
      <input
        type="checkbox"
        className={`${styles.objective} ${styles.public1}`}
        onChange={setTypes}
        value={ObjectiveType.Public1.toString()}
        checked={!!filter.types?.includes(ObjectiveType.Public1)}
      />
      <input
        type="checkbox"
        className={`${styles.objective} ${styles.public2}`}
        onChange={setTypes}
        value={ObjectiveType.Public2.toString()}
        checked={!!filter.types?.includes(ObjectiveType.Public2)}
      />
      <input
        type="checkbox"
        className={`${styles.objective} ${styles.secret}`}
        onChange={setTypes}
        value={ObjectiveType.Secret.toString()}
        checked={!!filter.types?.includes(ObjectiveType.Secret)}
      />
      <input
        type="checkbox"
        className={styles.pokExpansion}
        onChange={includePoK}
        checked={!filter.expansions || filter.expansions.length === 0 }
      />
      <button className={styles.clear} onClick={() => setFilter({})}>
        Clear
      </button>
    </div>
  )
};

export default Filters;

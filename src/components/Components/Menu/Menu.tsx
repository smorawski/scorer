import { FormattedMessage } from 'react-intl';
import { GENERAL } from '../../../i18n';
import styles from './Menu.module.scss';

export enum Mode {
  All ='all',
  Observed = 'observed',
};

const ModeTranslation = {
  [Mode.All]: GENERAL.ALL,
  [Mode.Observed]: GENERAL.OBSERVED,
};

interface MenuProps {
  currentMode: Mode;
  observedCards: number;
  changeMode: (mode: Mode) => void;
}

const Menu = ({ currentMode, changeMode, observedCards }: MenuProps) => {
  return (
    <div className={styles.container}>
      {
        Object.values(Mode).map(
          (mode: Mode) => (
            <button
              className={styles.button + (mode === currentMode ? ` ${styles.active}` : '')}
              onClick={() => changeMode(mode)}
            >
              <FormattedMessage id={ModeTranslation[mode]} />
              { mode  === Mode.Observed && <>({observedCards})</> }
            </button>
          )
        )
      }
    </div>
  );
};

export default Menu;

import { FormattedMessage } from 'react-intl';
import ChangeLanguage from './ChangeLanguage';
import { Language } from '../../../i18n';
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
  changeMode: (mode: Mode) => void;
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  observedCards: number;
}

const Menu = ({ currentMode, changeMode, currentLanguage, changeLanguage, observedCards }: MenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.modes}>
        {
          Object.values(Mode).map(
            (mode: Mode) => (
              <button
                key={mode}
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
      <div className={styles.languages}>
        <ChangeLanguage currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
      </div>
    </div>
  );
};

export default Menu;

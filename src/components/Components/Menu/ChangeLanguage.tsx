import { ChangeEvent }  from 'react';
import { Language } from '../../../i18n';

interface ChangeLanguageProps {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
};

const ChangeLanguage = ({ currentLanguage, changeLanguage }: ChangeLanguageProps) => (
  <>
    <select value={currentLanguage} onChange={(event: ChangeEvent<HTMLSelectElement>) => changeLanguage(event.target.value as Language)}>
      <option value={Language.EN}>{Language.EN}</option>
      <option value={Language.PL}>{Language.PL}</option>
    </select>

  </>
);

export default ChangeLanguage;

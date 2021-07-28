import { useState, useMemo } from 'react';
import { IntlProvider }  from 'react-intl';

import Menu, { Mode } from './components/Components/Menu/Menu';
import ObservedList from './components/ObservedList/ObservedList';
import AllList from './components/AllList/AllList';
import ResourcesProvider, { Objective } from './resources/resources-provider';
import { translations, Language } from './i18n';
import persistentStorage from './utils/persistentStorage/persistentStorage';

function App() {
  const [language, setLanguage] = useState<Language>(persistentStorage.getLanguage());

  const [mode, setMode] = useState<Mode>(Mode.All);

  const [observedObjectives, setObservedObjectives] = useState<Array<Objective>>(persistentStorage.getObservedObjectives());

  const allObjectives = useMemo(() => ResourcesProvider.getObjectives(language), [language]);

  const addCardToObserved = (objective: Objective): void => {
    const objectives = [...observedObjectives, objective];
    setObservedObjectives(objectives);
    persistentStorage.setObservedObjectives(objectives);
  };

  const removeCardFromObserved = (objective: Objective): void => {
    const objectives = observedObjectives.filter(({ name }) => name !== objective.name);
    setObservedObjectives(objectives);
    persistentStorage.setObservedObjectives(objectives);
  };

  const clearObjectives = () => {
    setObservedObjectives([]);
    persistentStorage.setObservedObjectives([]);
  }

  const changeLanguage = (newLanguage: Language): void => {
    setLanguage(newLanguage);
    persistentStorage.setLanguage(newLanguage);
  }

  return (
    <IntlProvider messages={translations[language]} locale={language.toString()} defaultLocale={'en'}>
      <Menu
        currentMode={mode}
        changeMode={setMode}
        currentLanguage={language}
        changeLanguage={changeLanguage}
        observedCards={observedObjectives.length}
      />
      {
        mode === Mode.All
        ? <AllList
          objectives={allObjectives}
          observedObjectives={observedObjectives}
          observeCard={addCardToObserved}
          removeCard={removeCardFromObserved}
        />
        : <ObservedList objectives={observedObjectives} removeObjective={removeCardFromObserved} clearObjectives={clearObjectives} />
      }
    </IntlProvider>
  );
}

export default App;

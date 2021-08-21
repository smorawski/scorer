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

  const [observedObjectives, setObservedObjectives] = useState<Array<string>>(persistentStorage.getObservedObjectivesIds());

  const allObjectives = useMemo(() => ResourcesProvider.getObjectives(language), [language]);

  const addCardToObserved = (objective: Objective): void => {
    const objectives = [...observedObjectives, objective.id];
    setObservedObjectives(objectives);
    persistentStorage.setObservedObjectivesIds(objectives);
  };

  const removeCardFromObserved = (objective: Objective): void => {
    const objectives = observedObjectives.filter((objectiveId) => objectiveId !== objective.id);
    setObservedObjectives(objectives);
    persistentStorage.setObservedObjectivesIds(objectives);
  };

  const clearObjectives = () => {
    setObservedObjectives([]);
    persistentStorage.setObservedObjectivesIds([]);
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
          allObjectives={allObjectives}
          observedObjectives={observedObjectives}
          observeCard={addCardToObserved}
          removeCard={removeCardFromObserved}
        />
        : <ObservedList allObjectives={allObjectives} observedObjectives={observedObjectives} removeObjective={removeCardFromObserved} clearObjectives={clearObjectives} />
      }
    </IntlProvider>
  );
}

export default App;

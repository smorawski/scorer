import { useState, useMemo } from 'react';
import { IntlProvider }  from 'react-intl';

import Menu, { Mode } from './components/Components/Menu/Menu';
import ObservedList from './components/ObservedList/ObservedList';
import AllList from './components/AllList/AllList';
import ResourcesProvider, { Objective } from './resources/resources-provider';
import { translations, Language } from './i18n';

const defaultLanguage = Language.EN;

function App() {
  const [language] = useState<Language>(defaultLanguage);

  const [mode, setMode] = useState<Mode>(Mode.All);

  const [observedObjectives, setObservedObjectives] = useState<Array<Objective>>([]);

  const allObjectives = useMemo(() => ResourcesProvider.getObjectives(language), [language]);

  const addCardToObserved = (objective: Objective): void => {
    setObservedObjectives([...observedObjectives, objective]);
  };

  const removeCardFromObserved =  (objective: Objective): void => {
    setObservedObjectives(observedObjectives.filter(({ name }) => name !== objective.name));
  };

  return (
    <IntlProvider messages={translations[language]} locale={language.toString()} defaultLocale={defaultLanguage.toString()}>
      <Menu currentMode={mode} changeMode={setMode} observedCards={observedObjectives.length}/>
      {
        mode === Mode.All
        ? <AllList
          objectives={allObjectives}
          observedObjectives={observedObjectives}
          observeCard={addCardToObserved}
          removeCard={removeCardFromObserved}
        />
        : <ObservedList objectives={observedObjectives} removeObjective={removeCardFromObserved} />
      }
    </IntlProvider>
  );
}

export default App;

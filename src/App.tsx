import Objective from './components/Objective';
import ResourcesProvider from './resources/resources-provider';

// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Scorer
      </header>
      {
        ResourcesProvider.getObjectives().map((objective) => <Objective objective={objective} /> )
      }
    </div>
  );
}

export default App;

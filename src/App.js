import 'tachyons';
import './App.css';
import Card from './Components/Card/Card';
import Navigations from './Components/Navigations/Navigations';
import {robots} from './robots';

function App() {
  return (
    <div className="App">
      <Navigations />
      {/*<Searchbar />
      <CardList />*/}
      {robots.map ( robot => (
          <Card id={robot.id} name={robot.name} email={robot.email} />
        ))
      }
    </div>
  );
}

export default App;

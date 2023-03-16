import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Provider} from 'react-redux'

function App() {

  return (
    <div className="App">
<Provider >
      <Home />
</Provider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {

const value=20;
  return (
    <div className="App">
      <Home value={value} />
    </div>
  );
}

export default App;

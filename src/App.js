import logo from './logo.svg';
import './App.css';
import ValueTable from  './custom_components/ValueTable'

const horses = [
    {id: 1, win_prob: 0.25},
    {id: 2, win_prob: 0.5},
    {id: 3, win_prob: 0.25},
]

function App() {
  return (
    <div className="App">
      <ValueTable horses={horses}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

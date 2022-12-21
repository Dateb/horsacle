import logo from './horsacle_logo.jpg';
import './App.css';
import ValueTable from  './custom_components/ValueTable'



function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Horsacle: </h1>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
            <ValueTable />
        </body>
    </div>
  );
}

export default App;

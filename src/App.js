import logo from './horsacle_logo.jpg';
import './App.css';
import './TrackBox.css'
import ValueContainer from "./custom_components/ValueContainer";



function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Horsacle: </h1>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
            <ValueContainer />
        </body>
    </div>
  );
}

export default App;

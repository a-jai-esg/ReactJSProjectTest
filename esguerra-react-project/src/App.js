import logo from './logo.svg';
import gaw from 'img/gaw.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gaw} className="App-logo" alt="logo" />
        <p>Gaw onsa atoha gaw? HAHAHAHA</p>
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

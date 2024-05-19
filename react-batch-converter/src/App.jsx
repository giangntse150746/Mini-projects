import './App.css';
import logo from './logo.svg';
import ConverterComponent from './components/converter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <ConverterComponent />
      </div>
    </div>
  );
}

export default App;

import Link from './components/Link';
import AverageForm from './components/AverageForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link page="https://facebook.com/">Facebook</Link>
        <img src="" className="App-logo" alt="logo" />
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
      <AverageForm />
    </div>
  );
}

export default App;

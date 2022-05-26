import Navigation from './components/subcomp/nav';
import Overview from './components/Overview';
import Savings from './components/Savings'
import Groceries from './components/Groceries';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/Savings" element={<Savings />}></Route>
        <Route path="/Groceries" element={<Groceries />}></Route>
      </Routes>
    </div>
  );
}

export default App;

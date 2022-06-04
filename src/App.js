import Navigation from './components/subcomp/nav';
import Overview from './components/Overview';
import Savings from './components/Savings'
import Groceries from './components/Groceries';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  const [Users, setUsers] = useState([
    {name: 'Johan Golden', salary: 67000}, 
    {name: 'Susan Golden', salary: 20000}
    ]);

    const Expenses= [{
        prod_name: 'Dairy Milk 1L', cost: 19.99
    }, {
        prod_name: 'Albany White Bread', cost: 14.99
    }]

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Overview userData = {Users} expenses = {Expenses} />}></Route>
        <Route path="/Savings" element={<Savings />}></Route>
        <Route path="/Groceries" element={<Groceries />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Nav from './components/subComps/Nav';
import Calculations from './components/Calculations';
import Thing from './Tests/functions/mockCalculation';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Calculations/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

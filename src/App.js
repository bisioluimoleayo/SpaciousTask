

import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Characters from './component/Characters';
import Header from './component/Header';
import Planets from './component/Planets';


function App() {
  return (

    <Router>
        <div className="px-5">
          <h1 className="fw-bold text-dark pt-5">Spacious</h1>

          <Header />
          <Routes>
            <Route exact path='/' element={<Planets />} />
            <Route exact path='/character' element={<Characters />} />
          </Routes>
        </div>

        {/* <div className="w-20 border">
          <PlanetDetails />
        </div> */}

    </Router>


  );
}

export default App;

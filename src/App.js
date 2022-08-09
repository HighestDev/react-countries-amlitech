import React,{useState} from 'react';
import AllCountries from './Components/AllCountries';
import Header from './Components/Header';
import Country from './Components/Country';
import {Routes,Route} from 'react-router-dom';

import './Styles/styles.css';


function App() {


  return (
    <div className="app">
     
       <Header /> 
          <Routes>
              <Route exact path="/" element={<AllCountries />}/>
              <Route exact path="/:country" element={<Country />}/>
          </Routes>

    </div>
  )
}

export default App

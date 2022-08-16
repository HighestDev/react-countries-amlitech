import React,{useEffect, useState} from 'react';
import AllCountries from './Components/AllCountries';
import CountryDetails from './Components/CountryDetails';
import {Routes,Route, useNavigate} from 'react-router-dom';
import {Triangle} from 'react-loader-spinner'

import Header from './Components/Header';
import './Styles/styles.css';



function App() {
const [darkMode,setDarkMode]=useState(false);
const [countries,setCountry]=useState([])
const navigate=useNavigate();
const [isLoading,setLoading]=useState(true);



const details=(code)=>{
     navigate(code)
}

const getCountries=async()=>{
      const res = await fetch('https://restcountries.com/v2/all');
      const data = await res.json();
      setCountry(data)  
}

const switchToggle=()=>{
  setDarkMode(prevState=>!prevState);
}


useEffect(()=>{
    getCountries()
    setLoading(false)
  
},[])




  return (
    <div className={`app ${darkMode ?'darkMode':''}`}>
      <Header darkMode={darkMode} onClick={switchToggle}/>
        <Routes>
              <Route exact path="/" element={
                isLoading ? 
                    <div className="loader">
                    <Triangle
                    className="triangle"
                    height={300}
                    width={250}
                    />
                    </div>
                 :
                  <AllCountries 
                  details={details}   
                  darkMode={darkMode}/>                   
        }/>
         
        

          <Route  path="/:country" element={

               <CountryDetails 
                 countries={countries}         
                darkMode={darkMode}/>
          }/>
        </Routes>
     
    </div>
  )
}

export default App

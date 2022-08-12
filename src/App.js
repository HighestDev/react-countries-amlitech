import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import AllCountries from './Components/AllCountries';
import Header from './Components/Header';
import Country from './Components/Country';
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';
import './Styles/styles.css';



const baseURL=`https://restcountries.com/v2/all`

function App() {
const [darkMode,setDarkMode]=useState(false);
const [countries,setCountries]=useState([]);


 const toggleTheme=()=>{
   setDarkMode((prevState)=>!prevState)
 }


 const getCountries=()=>{
  axios.get(`${baseURL}`)
  .then(res=>{
      const selected_countries = res.data.slice(0,12)
      setCountries(selected_countries)
      console.log(selected_countries)
      
  })
}


useEffect(()=>{
  getCountries()
},[])



  return (
    <div className={`app ${darkMode?'darkMode':''}`}>
       <Header  darkMode={darkMode} onToggle={toggleTheme}/> 
          <Routes>
              <Route exact path="/" 
               element={
                
                <AllCountries
               />
              
              }/>
              <Route exact path="/:country" element={<Country darkMode={darkMode} />}/>
          </Routes>

    </div>
  )
}

export default App

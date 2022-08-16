import React,{useState,useEffect} from 'react';
import { Audio } from  'react-loader-spinner';


function CountryTemplate({name,region,flag,population,code,capital,details,darkMode}) {


    const handleDetails=()=>{
        details(code)
    }

    return (

<div className={`country ${darkMode ?'darkMode':''}`} onClick={handleDetails}>

                  <div className="flag_container">
                  <img src={flag} alt=""/>
                </div>
        
                <div className="details">
                  <h2>{name}</h2>
        
                <p> Population:{""}
                <span className={`values ${darkMode?'darkMode':''}`}>{" "}{population}</span>
                </p>
              
                <p>Region:{""}
                 <span className={`values ${darkMode?'darkMode':''}`} >{" "}{region}</span>
                </p>
                
                <p>Capital:{""}
                   <span className={`values ${darkMode?'darkMode':''}`}>{" "}{capital}</span>
                </p>
                </div>         
                  
        </div> 
               

   
    )
}

export default CountryTemplate

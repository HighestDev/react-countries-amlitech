import React,{useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {useNavigate, useParams} from 'react-router-dom';


function Country({darkMode}) {
  const [countries,setCountries]=useState([])
    const navigate =useNavigate();
    const params = useParams();

    const goBack=()=>{
        navigate('/')
    }

    const getCountries=async()=>{
      const res = await fetch('https://restcountries.com/v2/all')
      const data = res.json().slice(0,2);
      setCountries(data)
    }

    

  let name
  let flagImg
  let nativeName
  let population
  let region
  let subregion
  let capital
  let topLevelDomain
  let currencies=[]
  let languages=[]
  let borders=[]

 console.log({name})
  countries.forEach(country=>{
    if(country.alpha3code === params.country){
      name=country.name;
   
      flagImg=country.flag;
      nativeName=country.nativeName;
      population=country.population;
      region=country.region;
      subregion=country.subregion;
      capital=country.capital;
      topLevelDomain=country.topLevelDomain;
    }
  })
  

    return (

      <div className="country">
        <button className={`back ${darkMode ? 'darkMode':''}`} onClick={goBack}>
          <FaArrowLeft/>
          Back
        </button>



        <div className="info">
           <img src="clique.jpg" alt="country_flag"/>
           <div className="info_align">
             <div className="left_info">
               <h2>Name</h2>
               
               <p>Native Name:{" "}<span className="gray_text"></span></p>
               <p>population:{" "} <span className="gray_text">Text</span></p>
               <p>Region:{" "} <span className="gray_text">Text</span></p>
               <p>Sub Region:{" "} <span className="gray_text">Text</span></p>
               <p>Capital:{" "} <span className="gray_text">Text</span></p>
             </div>

           <div className="right_info">
               <p>Top Level Domain:{" "} <span className="gray_text">Test</span></p>
               <p>Currencies:{" "} <span className="gray_text">Test</span></p>
               <p>Languages:{" "} <span className="gray_text">Test</span></p>
           </div>

        </div>

       </div> 

        <div className="border">
            <h4>Border Countries:</h4>
            <button className="border_btn">Text</button>
            <button className="border_btn">Text</button>
            <button className="border_btn">Text</button>
          
        </div>

    </div>
    )
}

export default Country

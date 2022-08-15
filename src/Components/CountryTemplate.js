import React,{useState,useEffect} from 'react';
import { Audio } from  'react-loader-spinner';


function CountryTemplate({name,region,flag,population,code,capital,details,darkMode}) {
  const[isLoading,setLoading]=useState(true);

    const handleDetails=()=>{
        details(code)
    }

    useEffect(()=>{
       setLoading(false)
    },[])

    return (
           <React.Fragment>

               {isLoading ? (
                   <Audio
                   height = "80"
                   width = "80"
                   radius = "9"
                   color = 'green'
                   ariaLabel = 'three-dots-loading'     
                   wrapperStyle
                   wrapperClass
                 />
               ):(

<div className={`country ${darkMode ?'darkMode':''}`} onClick={handleDetails}>

                  <div className="flag_container">
                  <img src={flag} alt=""/>
                </div>
        
                <div className="details">
                  <h3>{name}</h3>
        
                <p> Population:{""}
                <span>{population}</span>
                </p>
              
                <p>Region:{""}
                 <span>{region}</span>
                </p>
                
                <p>Capital:{""}
                   <span>{capital}</span>
                </p>
                </div>         
                  
        </div> 
               )}
             
 </React.Fragment>   
   
    )
}

export default CountryTemplate

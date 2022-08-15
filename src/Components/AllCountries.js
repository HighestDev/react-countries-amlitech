import React,{useState,useEffect,useRef} from 'react';
import {FaSearch,FaChevronDown} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CountryTemplate from './CountryTemplate';
import NoCountry from './NoCountry';



function AllCountries({darkMode}) {
    const [countries,setCountries] = useState([]);
    const [display,setDisplay]=useState(false)
    const currentInput =useRef();
    const select=useRef();
    const noCountries = countries.status || countries.message 
    const navigate=useNavigate();


    const toggleDropDown=()=>{
        setDisplay((prevState)=>!prevState)
    }
    const details=(code)=>{
        navigate(`/${code}`)
    }


    const getCountries=async()=>{
        const res = await fetch('https://restcountries.com/v2/all');
        const data= await res.json();
        setCountries(data.slice(0,12))
        console.log(data.slice);   
      }


      const fetchData=async()=>{
        const res = await fetch('https://restcountries.com/v2/all');
        const data= await res.json();
        setCountries(data)
           
      }

   
    useEffect(()=>{
        try {
          getCountries();
        } catch (error) {
          console.log(error)
        }
       
      },[])


      const searchInput=()=>{
          const searchValues = currentInput.current.value;
          if(searchValues.trim()){

              const fetchSearchData=async()=>{
                  const res = await fetch(`https://restcountries.com/v2/name/${searchValues}`);
                  const data = await res.json();
                  setCountries(data);
              }
              try {
                  fetchSearchData();
              } catch (error) {
                  console.log(error)
              }

          }else{
             getCountries() 
          }
      }
     


      const selectRegions=(event)=>{
          const selector=event.target.innerText

          if(selector){
              const fetchSelector=async()=>{
                 const res= await fetch(`https://restcountries.com/v2/region/${selector}`);
                 const data= await res.json();

                 if(selector === 'All'){
                     try {
                         fetchData();
                     } catch (error) {
                         console.log(error)
                     }
                     return;
                 }

                 setCountries(data)
              };

              try {
                  fetchSelector();
              } catch (error) {
                  console.log(error);
              }
          }
      }

    return (    
    <div className="app_body">
       <div className="inputs">
          <div className={`search_input ${darkMode ?'darkMode':''}`}>
             <FaSearch className={`searchIcon${darkMode ?'darkMode':''}`}/>
             <input type="text" placeholder="Search for a country...." ref={currentInput} onChange={searchInput}/>
            </div>
    


            <div className={`select_region ${darkMode ?'darkMode':''}`}>
                  <div className='drop_down'>
                  <p>Filter By Region</p>
                  <button ><FaChevronDown onClick={toggleDropDown} className={`toggleDown ${darkMode ?'darkMode':''}`}/></button>
                 </div>  

                 <div className={`drop ${darkMode ? 'darkMode':''} ${display ? '':'display'}`}
                  onClick={selectRegions}
                 >
                 <p>All</p>
                 <p>Africa</p>
                 <p>Americas</p>
                 <p>Asia</p>
                 <p>Europe</p>
                 <p>Oceania</p>
            </div>
         </div> 

    </div>

    
      <div className="countries">
          { !noCountries ? (
              countries?.map(country=>(
               <CountryTemplate
                 name={country.name}
                 region={country.region}
                 capital={country.capital}
                 flag={country.flag}
                 population={country.population}
                 code={country.alpha3Code}
                 details={details}
                 darkMode={darkMode}
               />
            ))

          ) :(<NoCountry />)}
      </div> 

    </div>
    )
}

export default AllCountries

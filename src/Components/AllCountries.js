import React,{useState,useEffect,useRef} from 'react';
import {useParams,useNavigate} from 'react-router';
import {FaSearch,FaChevronDown} from 'react-icons/fa';

// import {Triangle,TailSpin} from 'react-loader-spinner';







function AllCountries({darkMode,key,
                      name,population,
                      capital,code,flag}){

const [display,setDisplay]=useState(false);
const currentInputRef = useRef();
const dropDownInputRef = useRef();
const navigate=useNavigate();
const params= useParams();



const handleDetails=(code)=>{
   navigate(``)
}

const switchToggle=()=>{
    setDisplay((prevState)=>!prevState)
  }




//  const searchInput=()=>{
//     const searchValue = currentInputRef.current.value;

//     if(searchValue.trim()){
//        const fetchSearch=async()=>{
//           const response = await axios.get(`https://restcountries.com/v2/name/${searchValue}`)
//           .then((res)=>{
//             setCountries(res.data)
//           })
//        }

//        try {
//          fetchSearch()
//        } catch (error) {
//          console.log(error)
//        }
//     }else{
//       getCountries()
//     }

//  }

 const regionDropDown=()=>{

 }

 

 

    return (
 
      <div>
   {/* search */}
      <div className="input_base">
         <div className="input_section">
          <div className={`input_search ${darkMode ?'darkMode':''}`}>
            <FaSearch className="search_icon"/>
              <input type="text" placeholder="Search for a country..." ref={currentInputRef}  />
             </div>

            <div className={`select_region ${darkMode?'darkMode':''}`}>
              <div className="drop_down">
                <p>Filter By Region</p>
                  <button onClick={switchToggle}><FaChevronDown className={`toggleDown ${darkMode ?'darkMode':''}`}/></button>
                 </div>  
     
              <div className={`drop ${darkMode ? 'darkMode':''} ${display ? '':'display'}`}>
              <p ref={dropDownInputRef} onChange={regionDropDown}>All</p>
            <p ref={dropDownInputRef} onChange={regionDropDown}>Africa</p>
            <p ref={dropDownInputRef}onChange={regionDropDown} >America</p>
           <p ref={dropDownInputRef} onChange={regionDropDown}>Asia</p>
         <p ref={dropDownInputRef} onChange={regionDropDown}>Europe</p>
         <p ref={dropDownInputRef} onChange={regionDropDown}>Oceania</p>
       </div>
   </div>
  </div>

 </div>





            
            <div className="all_countries" >
                   <div className="whole_thing">
                       <div>
                           <img src={flag} alt="flag"/>
                       </div>

                       <div className="details">
                           <h3 className="name">{name}</h3> 
                           <p>Population:{""} <span className="values"></span></p>
                           <p>Regions:{""} <span className="values"></span></p>
                           <p>Capital:{""} <span className="values"></span></p>
                            
                       </div>

                   </div>        
               
            </div>
        </div>
    )
}

export default AllCountries

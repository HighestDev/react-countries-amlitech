import React,{useEffect} from 'react';
import {FaSearchMinus,FaFrownOpen,FaBug} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function NoCountry({darkMode}) {
    const navigate=useNavigate();

    
   
    return (
        <div className={`error_page ${darkMode?'darkMode':''}`}>
            <FaBug className={`bug ${darkMode ?'darkMode':''} `}/>
            
            <h1 className={`msg ${darkMode?'darkMode':''}`}>No Country Found.....</h1>
            
        </div>
    )
}

export default NoCountry

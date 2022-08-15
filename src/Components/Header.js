import React from 'react';
import { FaMoon,FaSun} from 'react-icons/fa';

function Header({darkMode,onClick}) {

    const darkThemeToggler=()=>{
        onClick();
    }
   
    return (
        <div className={`header ${darkMode ?'darkMode':''}`}>
            <div className="header_container">
              <h2>Where in the world?</h2>
              <div className="header_switch">
               <button onClick={darkThemeToggler}>{darkMode ? <FaMoon className="moon"/> : <FaSun className="sun"/> }</button> 
              <h3>{ darkMode ? 'Dark Mode' : 'Light Mode'}</h3> 
              </div>                  
            </div>
            </div>
    );
}

export default Header

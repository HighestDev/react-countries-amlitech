
import React from 'react';
import { FaMoon,FaSun} from 'react-icons/fa';


function Header({darkMode,onToggle}) {

  
   return (
     <div className={`header ${darkMode ? 'darkMode' : ''}`}>
       <div className="header_container">
          <h1>Where in the world?</h1>
           <div className="header_switch_mode">
              <button onClick={onToggle}>{darkMode ? <FaMoon className="moon"/> : <FaSun className="sun"/>}</button>
           <h3 className={`txt_mode ${darkMode ? 'darkMode':''}`}>{darkMode ? 'DarkMode' : 'LightMode'}</h3>
          </div>
         </div>   
      </div>

   )
}

export default Header

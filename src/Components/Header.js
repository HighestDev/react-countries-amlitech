import { setState } from 'expect';
import React,{useContext} from 'react';
import { FaMoon,FaSun} from 'react-icons/fa';


function Header() {

   return (
     <div className="header" >
       <div className="header_container">
          <h1>Where in the world?</h1>
           <div className="header_switch_mode">
              <button><FaMoon className="moon"/></button>
           <h3>DarkMode</h3>
          </div>
         </div>   
      </div>

   )
}

export default Header

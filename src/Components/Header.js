import {useState} from 'react';
import { FaMoon,FaSun } from 'react-icons/fa';


function Header() {
   const [darkMode,setDarkMode] = useState(false)


   const themeSwitcher=()=>{
      let headerContent = document.querySelector('.header_banner'); 
      let inputSearch = document.querySelector('.input_search');
      let inputTextColor = document.querySelector('.input_text');
      let dropDown = document.querySelector('.regions');

      
       headerContent.classList.toggle('theme_dark_bg')
       document.body.classList.toggle('theme_entire_bg_dark')
       inputSearch.classList.toggle('input_dark_theme');
       inputTextColor.classList.toggle('input_text_color');
       dropDown.classList.toggle('drop_down_color');
      
       setDarkMode(!darkMode)
   }

    return (
       <section className="header_banner">
        <div className="header">
             <div className="header_title">
                <h3>Where in the world?</h3>
              
             </div>

             <div className="theme"> 
               <button  onClick={themeSwitcher} className="btn">{darkMode ? <FaMoon className="moon"/> : <FaSun className="sun"/>}</button> 
              
                <h3 className="content">{darkMode ? 'DarkMode' : 'LightMode'}</h3>
             </div>
             
        </div>

   </section>
      
    )
}

export default Header



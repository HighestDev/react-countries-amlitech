import React from 'react'
import {FaArrowLeft} from 'react-icons/fa';


function Country() {
    return (
      <div className="country">
        <button className="back">
          <FaArrowLeft/>
          Back
        </button>



        <div className="info">
           <img src="clique.jpg" alt="country_flag"/>
           <div className="info_align">
             <div className="left_info">
               <h2>Name</h2>
               <p>Native Name:{" "}<span className="gray_text">Text</span></p>
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

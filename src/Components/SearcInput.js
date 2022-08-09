import React from 'react';
import {FaSearch,FaChevronDown} from 'react-icons/fa'

function SearcInput() {
    return (
  <div>
   {/* search */}
     <div className="input_base">
         <div className="input_section">
          <div className='input_search'>
            <FaSearch className="search_icon"/>
              <input type="text" placeholder="Search for a country..." />
             </div>

            <div className='select_region'>
              <div className="drop_down">
                <p>Filter By Region</p>
                  <button><FaChevronDown className='toggleDown'/></button>
                 </div>  
     
              <div className='drop'>
              <p>All</p>
            <p>Africa</p>
            <p>America</p>
           <p>Asia</p>
         <p>Europe</p>
         <p>Oceania</p>
       </div>
   </div>
  </div>
 </div>


</div>
    )
}

export default SearcInput


import { FaSearch } from 'react-icons/fa';
import {useState} from 'react';

function Input_filter() {
  const [darkMode,setDarMode] = useState(false);

    return (
        <div className="input_filters">
            <div className="input_search">
              <FaSearch className="search_icon"/>
              <input type="text" className="input_text" placeholder="Search for a country..."/>
            </div>

            <div className="regions">
              <select name="" id="">
                 <option value="">All</option> 
                 <option value="">Africa</option> 
                 <option value="">America</option> 
                 <option value="">Asia</option> 
                 <option value="">Oceania</option>  
              </select>
            </div>

        </div>
    )
}

export default Input_filter

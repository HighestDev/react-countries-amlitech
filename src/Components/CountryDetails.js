import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';





function CountryDetails({countries,darkMode}) {
    const navigate=useNavigate();
    const params = useParams();


    const goBack=()=>{
        navigate('/')
        
    }

    let name;
    let flagImg;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies=[];
    let languages=[];
    let borders =[];


    countries.forEach((country,darkMode)=>{
        if(country.alpha3Code === params.country){
            name=country.name;
            flagImg=country.flag;
            nativeName=country.nativeName;
            population=country.population;
            region=country.region;
            subregion=country.subregion
            capital=country.capital;
            topLevelDomain=country.topLevelDomain;


            country.currencies?.forEach((currency)=>{
                currencies.push(currency.name)
            })

            country.borders?.forEach((border)=>{
                borders.push(border)
            })

            country.languages?.forEach(language=>{
            languages.push(language.name)
        })
        }
        
    })
    
    return (
        <div className="country_details">
           <button className={`back ${darkMode ?'darkMode':''}`} onClick={goBack}>
               <FaArrowLeft/>
               <p>Back</p>
           </button> 

           <div className="country_details_body">
                 <div className="img_container">
                    <img src={flagImg} alt="pic"/>
                </div>

                <div className="info">
                    <h2>{name}</h2>
                    <div className="info_container">
                        <div className="left_info">
                            <p>Native Name: {""}
                               <span>{nativeName}</span>
                            </p>
                            <p>Region: {""}
                               <span>{region}</span>
                            </p>

                            <p>Sub Region: {""}
                               <span>{subregion}</span>
                            </p>
                            <p>Capital: {""}
                            <span>{capital}</span>
                            </p>
                         
                        </div>

                        <div className="right_info">
                           

                            <p>Top-level Domain: {""}
                              <span>{topLevelDomain}</span>
                            </p>

                            <p>Currencies: {""}

                               {currencies.map(currency=>{
                                   if(currencies.indexOf(currency)!== currencies.length -1){
                                       return (
                                        <span>
                                           {" "}
                                           {currency},
                                        </span>
                                       )
                                   }else{
                                       return(
                                           <span>
                                               {currency}
                                           </span>
                                       )
                                   }
                               })}
                               
                            </p>

                          
                            <p>Languages:{""}
                            {languages.map((language)=>{
                                if(languages.indexOf(language) !== languages.length -1){
                                    return(
                                        <span  key={language} className={`values ${darkMode ? 'darkMode' :''}`}>
                                        {" "}
                                        {language},
                                    </span>
                                    )
                                }else{
                                    return(
                                        <span className={`values${darkMode ? 'darkMode' :''}`}>
                                          {" "}
                                          {language}
                                        </span>
                                    )
                                }
                            })}
                             
                            </p>
   



                        </div>
                    </div>

                    Border Countries:
                   {borders.length ?(
                      borders.map(border=>(
                        <div className={`border_country ${darkMode?'darkMode':''}`}
                        key={border}
                        onClick={()=>{
                            navigate(`/${border}`)
                        }}>
                            {border}
                        </div>
                      ))
                   ):(
                       <div>
                           <p>No border....</p>
                       </div>
                   )}

                </div>
           </div>
        </div>
    )
}

export default CountryDetails

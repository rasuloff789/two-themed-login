import "../index.css";
import { useContext, useState } from 'react';
import  Informations  from "../data";
import findLanguageObject from "../findLanguageObject";
import { LanguagesContext } from '../LanguagesContext';

function Header(){
  const { language , setLanguage } = useContext(LanguagesContext);
  
  function onLangChange(value) {
    setLanguage(findLanguageObject(value));
  }
  
  let  [ bodyClass , setBodyClass ] = useState("");
  
  document.body.setAttribute("class" , bodyClass);
  
  return (
    <>
    <div className="container">
    <div className="toggle-box">
    <input type="checkbox" name="checkbox1" onChange={
      e =>{
        // console.log(e.target.value);
        setBodyClass(e.target.checked ? "dark-theme" : "");
      }
    }  id="toggle-box-checkbox" />
    <label htmlFor="toggle-box-checkbox" className="toggle-box-label-left"></label>
    <label htmlFor="toggle-box-checkbox" className="toggle-box-label"></label>
    </div>
    <select name="lang" defaultValue="en" onChange={e => {
      onLangChange(e.target.value);
    }}>
    {
      Informations.map((obj , inx) =>{ return (
        <option key={inx} value={obj.lang}>{obj.langExtention}</option>
        )})
      }
      </select>
      <div className="about-info">
      {language.aboutInformation}
      </div>
      </div>
      </>
      )
    };
    
    export default Header;
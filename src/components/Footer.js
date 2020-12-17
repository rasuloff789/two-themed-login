import "../index.css";
import { useContext } from 'react';
import { LanguagesContext } from '../LanguagesContext';

function Footer() {
  const { language } = useContext(LanguagesContext);
  return(
    <>
    <div className="container">
    <div className="about-info">{language.movieWhoAmIInfo}</div>
    </div>
    </>
    );
  }
  
  export default Footer;
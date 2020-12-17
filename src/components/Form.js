import "../../src/index.css";
import {useContext , useEffect , useState} from "react";
import { LanguagesContext } from '../LanguagesContext';


function Form() {
  
  const { language } = useContext(LanguagesContext);
  const [inputClass , setClass] = useState("")
  const [ passwordInput , setPassword ] = useState();
  const [ loginInput , setLogin ] = useState();
  
  const PASSWORD = "najottalim7777";
  
  useEffect( () => {
    setClass(!(passwordInput === PASSWORD && loginInput > 0));
  } , [ passwordInput ,  loginInput] );
  return (
    <>
    <div className="container">
    
    <form action="https://echo.htmlacademy.ru" className="form" method="post">
    <input type="text" name="name" placeholder={language.inputLogin}
    onChange={
      e =>{
        setLogin(e.target.value.length);
      } }
      />
      <input  type="password" name="password" placeholder={language.inputPassword} onChange={
        e =>{
          setPassword(e.target.value);
        }
      }/>
      <p className={inputClass ? "invalid" : "valid"}>{language.passwordText}</p>
      </form>
      
      </div>
      </>
      );
    };
    
    export default Form;
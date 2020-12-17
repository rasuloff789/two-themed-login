import  Informations  from "../src/data";

function findLanguageObject (value) {
  return Informations.find(
     obj => {
       return obj.lang === value;
     }
  );
};

export default findLanguageObject;
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App(){


  let buttonElement = []
  let [CalVal , SetCalVal] = useState("0");
  const onButtonClick = (element) => {
   if(element === 'C'){
    SetCalVal('');
   }
   else if (element === "="){
    const res = eval(CalVal);
    SetCalVal(res);

   }else{
    const newDisplayValue = CalVal + element;
    SetCalVal(newDisplayValue);
   }
  }


return (
  <>
  <div className="main-container">
    <h1>Calculator</h1>
    <Display CalVal = {CalVal}></Display>
    <Buttons onButtonClick = {onButtonClick }></Buttons>


  </div>
   </>
);

}

export default App;
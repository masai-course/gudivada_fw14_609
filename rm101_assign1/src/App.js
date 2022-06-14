import { useState } from "react";
import "./App.css";

function App() {

  const [sum,setSum]=useState(0);
  if(sum===-1){
    setSum(0);
}
   

  return (
    <div className="App">
      <h2 data-testid="counter-value">{sum}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>{
        setSum(sum+1);
      }} >increse by 1</button>
      <button data-testid="counter-increment-button" onClick={()=>{
        setSum(sum-1);
        setSum(-1);
      }}
      disabled={sum===0 ? true : false} >decrese by 1</button>
    </div>
  );
}

export default App;

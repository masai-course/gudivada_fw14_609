import { useState } from "react";
import "./App.css";

function App() {

  const [sum,setSum]=useState(0);
  if(sum===-1){
    setSum(0);
}
   

  return (
    <div className="App">
      <h2 data-testid="counter-value">COUNTER APP</h2>
      <h2 data-testid="counter-value" className="sum">{sum}</h2>
      <button data-testid="counter-decrement-button" className="decre" onClick={()=>{
        setSum(sum-1);
      }} disabled={sum===0 ? true : false} >Decrement by 1</button>
      <button data-testid="counter-increment-button" className="incre" onClick={()=>{
        setSum(sum+1);
        // setSum(-1);
      }}
      >Increment by 1</button>
    </div>
  );
}

export default App;

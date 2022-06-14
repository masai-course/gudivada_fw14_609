import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 data-testid="counter-value">X</h2>
      <button data-testid="counter-decrement-button"></button>
      <button data-testid="counter-increment-button"></button>
    </div>
  );
}

export default App;

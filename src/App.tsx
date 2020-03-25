import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
    <div className="App">
      Hello World {counter}
    </div>
    <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}

export default App;

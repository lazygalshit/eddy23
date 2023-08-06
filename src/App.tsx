import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState<string>("Eddy");

  const handleClick = () => {
    setTitle(title === "Eddy" ? "Sammy" : "Eddy")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick()}>click me</button>
        <p>
          {title} is the shit
        </p>
      </header>
    </div>
  );
}

export default App;

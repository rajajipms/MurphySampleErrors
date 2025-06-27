import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header title="Sample Web Application" />
      <main>
        <h2>Welcome to my sample app!</h2>
        <p>This is a simple React application built with Webpack.</p>
        
        <div className="counter">
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => test()}>Errro</button>
        </div>
      </main>
    </div>
  );
}

export default App;

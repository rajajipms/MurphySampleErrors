import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  // Define the test function that throws an error
  const test = () => {
    // This will throw an error when the button is clicked
    throw new Error('This is an intentional error for testing purposes');
    // Could also use:
    // console.log(undefinedVariable); // ReferenceError
    // or:
    // null.someProperty; // TypeError
  };

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
          <button onClick={() => test()}>Error Test</button>
        </div>
      </main>
    </div>
  );
}

export default App;

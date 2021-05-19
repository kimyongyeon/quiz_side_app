import React, { useState, useEffect } from 'react';
import { QuizMain } from './container/quiz_main';
import { QuizReg } from './container/quiz_reg';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).

  // Return the App component.
  return (
    <div className="App">
      <QuizMain />
      <QuizReg />
    </div>
  );
}

export default App;
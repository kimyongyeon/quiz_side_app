import React, { useState, useEffect } from 'react';
import { QuizMain } from './container/quiz_main';
import { QuizReg } from './container/quiz_reg';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  return (
    <div className="App">
      <QuizMain />
      <QuizReg />
    </div>
  );
}

export default App;

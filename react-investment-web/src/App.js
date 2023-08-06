import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Tax from './components/Tax';

function App() {
  const [showICalculator, setShowICalculator] = useState(false);
  const [showTCalculator, setShowTCalculator] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowICalculator(!showICalculator)}>Investment Calculator</button>
      {showICalculator && (
        <>
          <Calculator/>
        </>
      )}
            <button onClick={() => setShowTCalculator(!showTCalculator)}>Salary Tax Calculator</button>
      {showTCalculator && (
        <>
          <Tax/>
        </>
      )}
    </div>
  );
}

export default App;


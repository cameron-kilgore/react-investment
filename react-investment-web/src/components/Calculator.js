import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(6);
  const [numYears, setNumYears] = useState(10);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [investmentData, setInvestmentData] = useState(null);

  const calculateInvestmentData = () => {
    let investmentValue = initialInvestment;
    let data = [];
    for (let i = 0; i <= numYears; i++) {
      data.push({ x: i, y: investmentValue });
      investmentValue += (investmentValue * interestRate) / 100 + monthlyPayment * 12;
    }
    setInvestmentData({
      labels: data.map((d) => d.x),
      datasets: [
        {
          label: 'Investment Value',
          data: data.map((d) => d.y),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    });
  };

  return (
    <div>
      <h1>Investment Calculator</h1>
      <div>
        <label>Initial Investment:</label>
        <input
          type="number"
          placeholder={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          placeholder={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Number of Years:</label>
        <input
          type="number"
          placeholder={numYears}
          onChange={(e) => setNumYears(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Monthly Payment:</label>
        <input
          type="number"
          placeholder={monthlyPayment}
          onChange={(e) => setMonthlyPayment(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateInvestmentData}>Calculate</button>
      {investmentData && (
        <>
          <h2>Investment Value Over Time</h2>
          <Line data={investmentData} />
          <h2>End Value of Investment</h2>
          <p>£{investmentData.datasets[0].data[investmentData.datasets[0].data.length - 1].toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default Calculator;

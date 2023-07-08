import React, {useState} from 'react';

function Investments() {
const [Lumpsum, setLumpsum] = useState('10000');
const [MonthlyPayment, setMonthlyPayment] = useState('1000');
const [Years, setYears] = useState('15');
const [InterestRate, setInterestRate] = useState('5');

var mpval = parseInt(Lumpsum);
    for (var i = 1; i<=Years*12; i++) {
        mpval = (parseFloat(mpval)+parseInt(MonthlyPayment))*(1+(parseFloat(InterestRate)/1200))
    }

return (
    <div className="App">
        <label>
            Lump Sum: £<input 
            type="number" 
            placeholder={Lumpsum} 
            onChange={e => setLumpsum(e.target.value)}
        />
        </label>
        <br></br>
        <label>
            Monthly Payment of: £<input 
            type="number" 
            placeholder={MonthlyPayment} 
            onChange={e => setMonthlyPayment(e.target.value)}
        />
        </label>
        <br></br>
        <label>
            Interest Rate: <input 
            type="number" 
            placeholder={InterestRate} 
            onChange={e => setInterestRate(e.target.value)}
        />
        </label>
        <br></br>
        <label>
            Number of Years: <input 
            type="number" 
            placeholder={Years} 
            onChange={e => setYears(e.target.value)}
        />
        </label>
        <br></br>
        <button>Calculate</button>
        <p>Lump sum of £{Lumpsum} <br></br>
        Monthly Payments of £{MonthlyPayment} <br></br>
        {Years} years</p>
        <p>Total Contributions: £{(MonthlyPayment*12)}</p>        
        <p>Investment Amount: £{mpval}</p>

    </div>
    );
}
export default Investments;

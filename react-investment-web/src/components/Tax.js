import React, {useState} from 'react';

function Tax() {
    const [Salary, setSalary] = useState(40000);
    const [Pension, setPension] = useState(15);
  
    const [investmentData, setInvestmentData] = useState(null);


    const [showLoans, setShowLoans] = useState(false);


    const calculateTax = () => {
        let Total = Salary;
        let IncomeTax = 0;
        if(Total < 12570) {
            IncomeTax = Salary-12570;
        }
      };

return (
    <div>
        <h1>Salary Calculator</h1>
        <div>
            <button>Scotland</button>
            <button>England</button>
            <button>Wales</button>
            <button>Northern Ireland</button>
        </div>
      <div>
        <label>Salary:</label>
        <input
          type="number"
          placeholder={Salary}
          onChange={(e) => setSalary(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Pension Contributions(%):</label>
        <input
          type="number"
          placeholder={Pension}
          onChange={(e) => setPension(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Student Loans: </label>
        <button onClick={() => setShowLoans(!showLoans)}>Yes</button>
      {showLoans && (
        <>
        <p>Repayment Plan 1:
        <input
        type="checkbox"
        />
        </p>
        <p>Repayment Plan 2:
        <input
        type="checkbox"
        />
        </p>
        <p>Repayment Plan 4:
        <input
        type="checkbox"
        />
        </p>
        <p>Postgraduate:
        <input
        type="checkbox"
        />
        </p>
        </>
      )}
      </div>
      <button onClick={calculateTax}>Calculate</button>
      {investmentData && (
        <>
        <h2>Tax</h2>
        </>
      )}
    </div>
);
};
export default Tax;

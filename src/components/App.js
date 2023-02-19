import React ,{useState}from 'react'
import '../styles/App.css';

const App = () => {
  const[expense,setExpense] = useState(0);
  const handle = () => {
    const x = document.createElement("li");
    const y = document.getElementById("expense-input").value;
    x.innerHTML = y;
    document.getElementById("expense-list").appendChild(x);
    const a = y.indexOf('-');
    const b = y.slice(a+1).trim();
    setExpense(parseInt(b) + expense);
  }

  return (
    <div id="main">
      <input id="expense-input" />
      <button id="expense-button" onClick= {handle}>Add Expense</button>
      <div id="expense-list">
      </div>
      <div id="total-expense">
        Total Expense: 400
      </div>
    </div>
  )
}


export default App;

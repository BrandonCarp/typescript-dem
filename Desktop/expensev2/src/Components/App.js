import React, {useState} from 'react';
import NewExpense from './NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);
  // App => form

  const submitForm = (expense) => {
    if(expense.purchase.length > 0 && expense.date.length > 0 && expense.price > 0) {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
       });
     console.log(expenses);
      }
  }
  return (
    <div >
      <NewExpense submitForm={submitForm} />
    </div>
  );
}

export default App;

import React from 'react';
import ExpenseForm from './ExpenseForm';


const  NewExpense = (props) => {
  const savedExpenseData = (enteredData) => {
      const userData = {
        ...enteredData,
        id: Math.random().toString()
      };
   props.submitForm(userData);
  }
  return (
    <div>
      <ExpenseForm onSavedExpenseData={savedExpenseData} />
    </div>
  )
}

export default NewExpense;
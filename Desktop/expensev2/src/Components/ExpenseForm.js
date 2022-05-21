import React, {useState} from 'react';


const ExpenseForm = (props) => {
  const [purchase, setPurchase] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Card");
 
 
  let stateValues = {
    purchase: purchase,
    date: date,
    price: price,
    type: type
  }


  const submitForm = (e) => {
    e.preventDefault();

   props.submitForm(stateValues);


   setPurchase("");
   setDate("");
   setPrice("");
   setType("Card");
  }
 


  return (

   <form onSubmit={submitForm}>
     <h1>Test</h1>
     <div>
       <input type='text' value={purchase} onChange={(e) => setPurchase(e.target.value)}/>
     </div>
     <div>
       <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
     </div>
     <div>
       <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
     </div>
     <div>
      <select value={type}  onChange={((e) => setType(e.target.value))}>
        <option>Card</option>
        <option>Cash</option>
        <option>Crypto</option>
      </select>
     </div>

     <button type="">Submit</button>
   </form>
  )
};


export default ExpenseForm;
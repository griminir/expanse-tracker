import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    {
      Id: 1,
      Description: 'legobil',
      Price: 30,
      Catogory: 'fun',
    },
    {
      Id: 2,
      Description: 'rema 100',
      Price: 600,
      Catogory: 'mat',
    },
    {
      Id: 3,
      Description: 'fotball',
      Price: 30,
      Catogory: 'fun',
    },
    {
      Id: 4,
      Description: 'strøm',
      Price: 300,
      Catogory: 'regninger',
    },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(Id) => setExpenses(expenses.filter(e => e.Id !== Id))}
      />
    </>
  );
}

export default App;

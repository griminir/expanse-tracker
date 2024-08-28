import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

export const categories = ['Fun', 'Regninger', 'Mat', 'Ukjent', 'Transport'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      Id: 1,
      Description: 'legobil',
      Cost: 30,
      Catogory: 'fun',
    },
    {
      Id: 2,
      Description: 'rema 100',
      Cost: 600,
      Catogory: 'mat',
    },
    {
      Id: 3,
      Description: 'fotball',
      Cost: 30,
      Catogory: 'fun',
    },
    {
      Id: 4,
      Description: 'strøm',
      Cost: 300,
      Catogory: 'regninger',
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter(
        (e) => e.Catogory.toLowerCase() === selectedCategory.toLowerCase()
      )
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(Id) => setExpenses(expenses.filter((e) => e.Id !== Id))}
      />
    </>
  );
}

export default App;

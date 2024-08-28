import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'legobil',
      cost: 30,
      category: 'fun',
    },
    {
      id: 2,
      description: 'rema 100',
      cost: 600,
      category: 'mat',
    },
    {
      id: 3,
      description: 'fotball',
      cost: 30,
      category: 'fun',
    },
    {
      id: 4,
      description: 'strøm',
      cost: 300,
      category: 'regninger',
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter(
        (e) => e.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : expenses;

  return (
    <>
      <div className='mb-5'>
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;

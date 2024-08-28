interface Expanse {
  id: number;
  description: string;
  cost: number;
  category: string;
}

interface Props {
  expenses: Expanse[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Cost</th>
          <th>Catogory</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenses) => (
          <tr key={expenses.id}>
            <td>{expenses.description}</td>
            <td>{expenses.cost}</td>
            <td>{expenses.category}</td>
            <td>
              <button
                onClick={() => onDelete(expenses.id)}
                className='btn btn-outline-danger'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            NOK
            {expenses
              .reduce((acc, expenses) => expenses.cost + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;

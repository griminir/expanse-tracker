interface Expanse {
  Id: number;
  Description: string;
  Price: number;
  Catogory: string;
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
          <th>Price</th>
          <th>Catogory</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenses) => (
          <tr key={expenses.Id}>
            <td>{expenses.Description}</td>
            <td>{expenses.Price}</td>
            <td>{expenses.Catogory}</td>
            <td>
              <button
                onClick={() => onDelete(expenses.Id)}
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
              .reduce((acc, expenses) => expenses.Price + acc, 0)
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

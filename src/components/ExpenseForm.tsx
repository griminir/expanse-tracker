import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import categories from '../categories';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 charaters' })
    .max(50),
  cost: z.number({ message: 'please enter a cost' }).min(1).max(100_000, {
    message:
      'there is no way you are out here paying more then 100k for something',
  }),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'please select a category' }),
  }),
});

type ExpensesFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpensesFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpensesFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='cost' className='form-label'>
          cost
        </label>
        <input
          {...register('cost', { valueAsNumber: true })}
          id='cost'
          type='number'
          className='form-control'
        />
        {errors.cost && <p className='text-danger'>{errors.cost.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} className='form-select' id='category'>
          <option value=''></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className='text-danger'>{errors.category.message}</p>
        )}
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpenseForm;

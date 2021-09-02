import ExpenseItem from '../ExpenseItem/ExpenseItem.component'
import './Expenses.styles.css'
export const Expenses = ({ expenses }) => (
  <div className='expenses'>
    {expenses.map(({ title, amount, date, ...expense }) => (
      <ExpenseItem key={expense.id} title={title} amount={amount} date={date} />
    ))}
  </div>
)

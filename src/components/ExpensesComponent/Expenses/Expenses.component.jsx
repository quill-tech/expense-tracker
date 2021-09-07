import Card from '../../UI/Card/Card.components'
import ExpenseItem from '../ExpenseItem/ExpenseItem.component'
import './Expenses.styles.css'
export const Expenses = ({ items }) => (
  <Card className='expenses'>
    {items.map(({ title, amount, date, ...item }) => (
      <ExpenseItem key={item.id} title={title} amount={amount} date={date} />
    ))}
  </Card>
)

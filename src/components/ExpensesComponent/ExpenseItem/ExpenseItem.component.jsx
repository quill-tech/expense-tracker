import Card from '../../UI/Card/Card.components'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate.component'
import './ExpenseItem.styles.css'

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
    </Card>
  )
}

export default ExpenseItem

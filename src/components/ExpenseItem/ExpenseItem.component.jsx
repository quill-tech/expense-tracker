import { ExpenseDate } from '../ExpenseDate/ExpenseDate.component'
import './ExpenseItem.styles.css'
function ExpenseItem(props) {
  console.log(props.date)
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem

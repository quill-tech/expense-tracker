import React from 'react'
import ExpenseItem from '../../ExpenseItem/ExpenseItem.component'
import './ExpensesList.styles.css'
const ExpensesList = ({ items }) => {
  // Output Conditional Contnet
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }
  return (
    <ul className='expenses-list'>
      {items.map(({ title, amount, date, ...item }) => (
        <ExpenseItem key={item.id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  )
}
export default ExpensesList

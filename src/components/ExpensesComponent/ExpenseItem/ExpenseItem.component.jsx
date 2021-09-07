import React, { useState } from 'react'
import Card from '../../UI/Card/Card.components'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate.component'
import './ExpenseItem.styles.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  function clickHandler() {
    setTitle('Title')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem

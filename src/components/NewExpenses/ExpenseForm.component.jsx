import React, { useState } from 'react'
import './NewExpense.styles.css'
const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    date: '',
  })

  /*
   * Listen to events on input change! *
   */

  const titleChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }

  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  }

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, date: event.target.value }
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.date),
    }
    // Execute props data to be initialized in NewExpense Component
    props.onSaveExpenseData(expenseData)

    // Clear form entries on submit
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      date: '',
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label> Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            placeholder='Title'
          />
        </div>
        <div className='new-expense__control'>
          <label> Amount</label>
          <input
            type='number'
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            placeholder='Amount'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label> Date</label>
          <input
            type='date'
            value={userInput.date}
            onChange={dateChangeHandler}
            placeholder='Date'
            min='01-01-2019'
            max='12-31-2022'
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button onClick={props.hideForm} type='button'>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm

import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm.component'
import './ExpenseForm.styles.css'
const NewExpense = props => {
  const [showAddExpenseButton, setShowAddExpenseButton] = useState(false)
  // expenseDataFromFormInput => passed from the ExpenseForm Component
  const saveExpenseDataHandler = expenseDataFromFormInput => {
    const expenseData = {
      ...expenseDataFromFormInput,
      id: Math.random().toString(),
    }
    // Add expenseData as param on props value
    props.onAddExpense(expenseData)
    setShowAddExpenseButton(!showAddExpenseButton) //Hides form  on submit
  }

  const addExpenseHandler = () => {
    setShowAddExpenseButton(!showAddExpenseButton)
  }

  const hideFormHandler = () => {
    setShowAddExpenseButton(!showAddExpenseButton)
  }

  return (
    <>
      <div className='new-expense'>
        {showAddExpenseButton && (
          <ExpenseForm
            hideForm={hideFormHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        )}
        {!showAddExpenseButton && (
          <button onClick={addExpenseHandler} type='submit'>
            Add Expense
          </button>
        )}
      </div>
    </>
  )
}
export default NewExpense

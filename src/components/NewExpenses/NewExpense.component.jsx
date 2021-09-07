import React from 'react'
import ExpenseForm from './ExpenseForm.component'
import './ExpenseForm.styles.css'
const NewExpense = props => {
  // expenseDataFromFormInput => passed from the ExpenseForm Component
  const saveExpenseDataHandler = expenseDataFromFormInput => {
    const expenseData = {
      ...expenseDataFromFormInput,
      id: Math.random().toString(),
    }
    // Add expenseData as param on props value
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
export default NewExpense

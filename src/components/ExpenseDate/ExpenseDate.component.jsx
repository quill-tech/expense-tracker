import './ExpenseDate.styles.css'
export const ExpenseDate = props => {
  // This is referenced as props.date because it'll be passed into Expense Item which is a direct child of the App Component.
  // ? Split date into => (MM,DD,YYYY)

  const options = { day: '2-digit', month: 'long' }
  const day = props.date.toLocaleString('en-US', { day: options.day })
  const month = props.date.toLocaleString('en-US', { month: options.month })
  const year = props.date.getFullYear() //  const year = props.date.toLocaleString('en-US', { year: 'numeric' })

  return (
    <div className='expense-date'>
      <div className='expense_date__day'>{day} </div>
      <div className='expense-date__month'>{month} </div>
      <div className='expense-date__year'>{year} </div>
    </div>
  )
}

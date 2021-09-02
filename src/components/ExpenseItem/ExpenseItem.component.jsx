import './ExpenseItem.styles.css'
function ExpenseItem(props) {
  // Get Single items from date (MM,DD,YYYY)
  const options = { day: 'numeric', month: 'long' }
  const day = props.date.toLocaleString('en-US', { day: options.day })
  const month = props.date.toLocaleString('en-US', { month: options.month })
  const year = props.date.getFullYear() //  const year = props.date.toLocaleString('en-US', { year: 'numeric' })

  return (
    <div className='expense-item'>
      <div>
        <div>{day} </div>
        <div>{month} </div>
        <div>{year} </div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem

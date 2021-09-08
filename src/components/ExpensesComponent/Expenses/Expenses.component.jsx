import { useState } from 'react'
import Card from '../../UI/Card/Card.components'
import ExpenseItem from '../ExpenseItem/ExpenseItem.component'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.components'
import './Expenses.styles.css'
export const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2021')
  const filterSelectedYearHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  /*
   * To Filter Items by selected date
   * Get year from Date object and convert it to string then compare to FilteredYear
   */
  const filterExpenseByDate = items.filter(
    ({ date }) => date.getFullYear().toString() === filteredYear
  )
  // Output Conditional Contnet
  let expensesContent = <p>No expense found.</p>
  if (filterExpenseByDate.length !== 0) {
    /* Map through filterExpenseByDate instead of the inital items */
    expensesContent = filterExpenseByDate.map(
      ({ title, amount, date, ...item }) => (
        <ExpenseItem key={item.id} title={title} amount={amount} date={date} />
      )
    )
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterYear={filterSelectedYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )
}

import { useState } from 'react'
import Card from '../../UI/Card/Card.components'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.components'
import ExpensesList from './ExpensesList/ExpensesList.component'
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

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterYear={filterSelectedYearHandler}
        />
        <ExpensesList items={filterExpenseByDate} />
      </Card>
    </div>
  )
}

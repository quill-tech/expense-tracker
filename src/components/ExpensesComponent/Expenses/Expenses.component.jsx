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
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultYear={filteredYear}
          onFilterYear={filterSelectedYearHandler}
        />
        {items.map(({ title, amount, date, ...item }) => (
          <ExpenseItem
            key={item.id}
            title={title}
            amount={amount}
            date={date}
          />
        ))}
      </Card>
    </div>
  )
}

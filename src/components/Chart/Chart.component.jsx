import React from 'react'
import ChartBar from './ChartBar.component'
import './Chart.styles.css'
const Chart = props => {
  // Transform chart data object to value
  const chartDataValue = props.chartData.map(data => data.value)
  const totalMaxValue = Math.max(...chartDataValue)
  return (
    <div className='chart'>
      {props.chartData.map(data => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={totalMaxValue}
        />
      ))}
    </div>
  )
}
export default Chart

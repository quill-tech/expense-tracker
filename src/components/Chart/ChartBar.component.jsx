import React from 'react'

import './ChartBar.styles.css'

const ChartBar = props => {
  // Fill corresponding bar height
  let fillChartBar = '0%'
  if (props.maxValue > 0) {
    fillChartBar = Math.round((props.value / props.maxValue) * 100) + '%'
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__label'>{props.label}</div>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: fillChartBar }}></div>
      </div>
    </div>
  )
}
export default ChartBar

/*
 * This wraps all Expense Items and its components

? => props.children works on any item wrapped within the component. Eg
 ? <ExpenseDate >This will be referenced as the Children </ExpenseDate>
 */
import './Card.styles.css'
function Card(props) {
  // Add className on Card component (children) to the div of classname=>card here.
  const classes = `card + ${props.className}`
  console.log(props)
  return <div className={classes}>{props.children}</div>
}
export default Card

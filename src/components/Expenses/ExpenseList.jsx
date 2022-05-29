import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
// import './ExpenseList.css'


function ExpensesList(props) {
    return(
        <Card className = 'expenses'>
            {props.expenses.map((element)=>{
                return(
                    <ExpenseItem
                    date={element.date}
                    text={element.title}
                    price={element.amount}
                    key={element.id}
                    />
                )
            })};
        </Card>
    )
}
export default ExpensesList
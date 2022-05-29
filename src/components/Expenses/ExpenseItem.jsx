import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props){
	const [text, setText]= useState(props.title)

	function clickHandler(){
		setText('hello')
	}
	return (
		<div className="expense-item">
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{text}</h2>
					<div className='expense-item__price'>{props.price}</div>
				</div>
				<button onClick={clickHandler}>change title</button>
		</div>
	)
}

export default ExpenseItem

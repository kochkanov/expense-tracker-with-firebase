import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')

	const [enteredDate, setEnteredDate] = useState('')

	const titleHandler = (e) => {
		setEnteredTitle(e.target.value)
	}

	const amountHandler = (e) => {
		setEnteredAmount(e.target.value)
	}
	const dateHandler = (e) => {
		setEnteredDate(e.target.value)
	}

	const submitHanlder = (e) => {
		e.preventDefault()
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
    //         id: Math.random().toString()
        }
		props.onSaveData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}
	return (
		<form onSubmit={submitHanlder}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>amount</label>
					<input
						value={enteredAmount}
						type='number'
						onChange={amountHandler}
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						onChange={dateHandler}
						type='date'
						value={enteredDate}
						min='2000-01-01'
						max='2023-01-01'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm

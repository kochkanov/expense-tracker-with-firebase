import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense (props){
    function saveData(data) {
        const objectWithId = {
            ...data,
            id: Math.random().toString(),
        }
        props.onSaveDataToList(objectWithId)
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveData={saveData}/>
        </div>
    )
}

export default NewExpense;
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { ExpensesChart } from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    console.log(expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No expense Found</p>
      ) : (
        filteredExpenses.map((el) => (
          <ExpenseItem
            key={el.id}
            date={el.date}
            title={el.title}
            price={el.amount}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;

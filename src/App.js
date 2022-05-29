import { useCallback, useState } from "react";
import "./components/NewExpense/NewExpense.css";
import "./App.css";
// import ExpenseItem from './/components/Expenses/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import ".//components/Expenses/ExpenseList";
// import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from "./components/NewExpense/NewExpense";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const expenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2023, 7, 14),
//   },
//   {
//     id: "e2",
//     title: "New TV",
//     amount: 799.49,
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2024, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  // const [data, setData] = useState(expenses);
  const [data, setData] = useState([]);
  const notify = (note) => {
    if (note === "POST sended" || note === "We have a data") {
      return toast.success(note);
    }
    if (note === "ERROR" || note === "We have not a data") {
      return toast.error(note);
    }
  };

  async function saveDataToList(objectWithId) {
    console.log(objectWithId);
    try {
      const response = await fetch(
        "https://items-3bc73-default-rtdb.firebaseio.com/items.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objectWithId),
        }
      );
      notify("POST sended");

      const data = await response.json();
    } catch (error) {
      notify("ERROR");
    }
  }

  const getItemsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://items-3bc73-default-rtdb.firebaseio.com/items.json"
      );
     
      const data = await response.json();
       notify("We have data");
      const newItems = [];
      for (const key in data) {
        newItems.push({
          id: key,
          title: data[key].title,
          date: new Date(data[key].date),
          amount: data[key].amount,
        });
      }
      setData(newItems);

      // setData((prevData) => {
      //   return [...prevData, newdata];
      // });
    } catch (error) {
      notify("We have not data");
    }
  }, []);

  return (
    <div className="App">
      <NewExpense onSaveDataToList={saveDataToList} />
      <div className="new-expense">
        <button type="submit" onClick={getItemsHandler}>
          Get expense
        </button>
      </div>

      <Expenses expenses={data} />
      <ToastContainer />
    </div>
  );
}

export default App;

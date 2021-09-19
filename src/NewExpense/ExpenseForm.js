import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTitle.length < 1) {
      alert("Please provide a title!");
      return;
    }

    if (newAmount.length < 1) {
      alert("Please provide an amount!");
      return;
    }

    if (newDate.length < 1) {
      alert("Please provide a date!");
      return;
    }

    const data = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    console.log(data);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={newTitle} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={newDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

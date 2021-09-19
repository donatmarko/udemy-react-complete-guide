import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAdd }) => {
  const saveDataHandler = (newData) => {
    const data = {
      ...newData,
      id: Math.floor(Math.random() * 1000 + 1),
    };
    onAdd(data);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSave={saveDataHandler}
          onClose={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

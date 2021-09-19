import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAdd }) => {
  const saveDataHandler = (newData) => {
    const data = {
      ...newData,
      id: Math.floor(Math.random() * 1000 + 1)
    };
    onAdd(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;

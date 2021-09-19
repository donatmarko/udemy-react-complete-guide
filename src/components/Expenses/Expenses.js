import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredItems = items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onYearChange={filterYearChangeHandler}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;

import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  function addExpense(body) {
    setExpenses((prev) => [...prev, body]);
  }

  function editExpense(id, body) {
    setExpenses((prev) =>
      prev.map((expenses) =>
        expenses.id === id ? { ...expenses, ...body } : expenses,
      ),
    );
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <ExpenseContext.Provider
      value={{ expenses, deleteExpense, addExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

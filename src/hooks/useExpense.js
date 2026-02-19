import { useContext } from "react";
import { ExpenseContext } from "../context/expenseContext";

export default function useExpense() {
  return useContext(ExpenseContext);
}

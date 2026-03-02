import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);

  const STORAGE_KEY = user ? `@expense_${user.id}` : null;

  useEffect(() => {
    if (user) {
      loadExpenses();
    } else {
      setExpenses([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveExpenses(expenses);
    }
  }, [expenses]);

  const loadExpenses = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      setExpenses(stored ? JSON.parse(stored) : []);
    } catch (err) {
      console.log("Load error:", err);
    }
  };

  const saveExpenses = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.log("Save error:", err);
    }
  };

  function addExpense(body) {
    setExpenses((prev) => [...prev, body]);
  }

  function editExpense(id, body) {
    setExpenses((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...body } : item)),
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

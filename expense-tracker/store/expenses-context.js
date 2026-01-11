/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, data }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    }
    case "SET": {
      const inverted = action.payload.reverse();
      return inverted;
    }
    case "UPDATE": {
      const itmIndex = state.findIndex((e) => e.id === action.payload.id);
      if (itmIndex === -1) return null;
      const updatedItem = { ...state[itmIndex], ...action.payload.data };
      const updatedExpenses = [...state]; // shallow copy
      updatedExpenses[itmIndex] = updatedItem;
      return updatedExpenses;
    }
    case "DELETE": {
      return state.filter((expense) => expense.id !== action.payload);
    }
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

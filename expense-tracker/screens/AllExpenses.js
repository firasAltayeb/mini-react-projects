import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallBackText="No expenses registered"
    />
  );
}

export default AllExpenses;

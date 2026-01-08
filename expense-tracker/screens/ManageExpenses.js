import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExpenseForm from "../components/ExpenseForm";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "test update",
        amount: 99.99,
        date: new Date("2026-01-01"),
      });
    } else {
      expensesCtx.addExpense({
        description: "test add",
        amount: 99.99,
        date: new Date("2026-01-01"),
      });
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

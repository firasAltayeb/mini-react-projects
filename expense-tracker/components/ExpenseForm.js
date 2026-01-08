import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Ampount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentences",
        }}
      />
    </View>
  );
}

export default ExpenseForm;

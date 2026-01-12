import { Text, View, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../constants/styles";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={[styles.text]}>{message}</Text>
      <Button title="Okay" onPress={onConfirm} />
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

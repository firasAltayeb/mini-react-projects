import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={titleStyles.title}>{children}</Text>;
}

export default Title;

const titleStyles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    marginBottom: 40,
    maxWidth: "80%",
    width: 300,
  },
});

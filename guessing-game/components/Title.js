import { Text, StyleSheet, useWindowDimensions } from "react-native";

function Title({ children }) {
  const { height } = useWindowDimensions();

  const marginBottom = height < 400 ? 20 : 40;

  return (
    <Text style={[titleStyles.title, { marginBottom: marginBottom }]}>
      {children}
    </Text>
  );
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
    maxWidth: "80%",
    width: 300,
  },
});

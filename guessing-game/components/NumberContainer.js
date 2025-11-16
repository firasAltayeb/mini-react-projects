import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={containerStyles.container}>
      <Text style={containerStyles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const containerStyles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24,
    marginHorizontal: deviceWidth < 400 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 28 : 36,
  },
});

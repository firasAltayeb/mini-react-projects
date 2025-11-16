import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({ children }) {
  const { height } = useWindowDimensions();

  return (
    <View style={[containerStyles.container]}>
      <Text
        style={[
          containerStyles.numberText,
          { fontSize: height < 400 ? 36 : 36 },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const containerStyles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginHorizontal: 24,
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});

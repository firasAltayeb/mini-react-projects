import { StyleSheet, View, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function Card({ children }) {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.card,
        {
          marginTop: height < 400 ? 0 : 36,
          width: height < 400 ? 400 : "80%",
        },
      ]}
    >
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

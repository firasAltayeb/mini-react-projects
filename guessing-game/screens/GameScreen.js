import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={StyleSheet.screen}>
      <Text>Oppent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + */}
        {/* - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

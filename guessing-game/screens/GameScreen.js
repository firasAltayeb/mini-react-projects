import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={gameScrnStyles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const gameScrnStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

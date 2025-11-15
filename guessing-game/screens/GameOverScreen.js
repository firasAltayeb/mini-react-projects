import { Text, View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={gameOverScrnStyles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={gameOverScrnStyles.imageContainer}>
        <Image
          style={gameOverScrnStyles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={gameOverScrnStyles.summaryText}>
        Your phone needed{" "}
        <Text style={gameOverScrnStyles.highlightText}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={gameOverScrnStyles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const gameOverScrnStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

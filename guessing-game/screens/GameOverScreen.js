import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { height } = useWindowDimensions();

  const imageSize = height < 400 ? 150 : 300;

  return (
    <View style={gameOverScrnStyles.rootContainer}>
      <Title>Game Over!</Title>
      <View
        style={[
          gameOverScrnStyles.imageContainer,
          {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          },
        ]}
      >
        <Image
          style={gameOverScrnStyles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text
        style={[
          gameOverScrnStyles.summaryText,
          {
            marginVertical: height < 400 ? 12 : 24,
          },
        ]}
      >
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
    alignItems: "center",
  },
  imageContainer: {
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
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

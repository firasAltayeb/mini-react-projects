import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is the meal Detail screen {mealId} </Text>;
}

export default MealDetailScreen;

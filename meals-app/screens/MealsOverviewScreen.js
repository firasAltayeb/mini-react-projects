import { useLayoutEffect } from "react";
import MealList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealOverviewScreen;

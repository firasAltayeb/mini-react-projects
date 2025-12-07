import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
// import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#642d03" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#45362a" },
        drawerContentStyle: { backgroundColor: "#642d03" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#45362a",
        drawerActiveBackgroundColor: "#e4b592",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#642d03" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#45362a" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

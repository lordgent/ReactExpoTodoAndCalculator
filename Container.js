import { useContext } from "react";
import AddTodo from "./screens/AddTodo";
import HomeScreen from "./screens/HomeScreen";
import Calculator from "./screens/Calculator";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { AppContext } from "./context/contextapp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function CustomTab() {
  const [mode] = useContext(AppContext);
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TodoList") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: `${
          mode === "sun" ? theme.colors.indigo["700"] : theme.colors.gray["700"]
        }`,
        tabBarInactiveTintColor: "#b2bec3",
      })}
    >
      <Tab.Screen name="TodoList" component={HomeScreen} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={CustomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Todo"
          component={AddTodo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;

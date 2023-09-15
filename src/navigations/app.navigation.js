import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Homescreen";
import DetailedScreen from "../screens/DetailedScreen";
import Person from "../screens/Person";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

export default function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          // className="items-center"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetail"
          // className="items-center"
          component={DetailedScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Person"
          // className="items-center"
          component={Person}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          // className="items-center"
          component={Search}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

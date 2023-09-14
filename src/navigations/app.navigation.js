import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Homescreen";
import DetailedScreen from "../screens/DetailedScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

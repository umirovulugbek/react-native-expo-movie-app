import React from "react";
import Home from "../screens/Homescreen";
import DetailedScreen from "../screens/DetailedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route?.name === "Homescreen") {
              iconName = focused ? "home" : "home-outline";
            } else if (route?.name === "Detailscreen") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "crimson",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Homescreen"
          component={Home}
          options={{ headerShown: false, tabBarBadge: 5}}
        />
        <Tab.Screen
          name="Detailscreen"
          component={DetailedScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

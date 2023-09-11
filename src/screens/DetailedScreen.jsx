import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";

export default function DetailedScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text>Details</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Homescreen")}
      />
    </View>
  );
}

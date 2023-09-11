import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text>Home page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// Async plugins processing
// process(styles)
//   .then(() => {
//     // Render your components after tailwindcss plugins have been processed
//     ReactDOM.render(<Home />, document.getElementById("root"));
//   })
//   .catch((error) => {
//     console.error(error);
//   });

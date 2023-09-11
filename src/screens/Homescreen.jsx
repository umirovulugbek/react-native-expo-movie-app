import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <StatusBar style="auto" />
      <Text>Home page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detailscreen")}
      />
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

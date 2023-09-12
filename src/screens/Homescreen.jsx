import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; //xech qayerga qimirlamaydi
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home({ navigation }) {
  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 my-2">
          {/* <Image source={(require = "../../assets/adaptive-icon.png")} /> */}
          <Text className="color-white text-xl">UMovie</Text>
          <MagnifyingGlassIcon size={30} color={"white"} strokeWidth={2} />
        </View>
      </SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}></ScrollView>
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

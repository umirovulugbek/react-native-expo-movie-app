import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
export default function DetailedScreen() {
  const navigation = useNavigation();
  const [isFavourite, setFavourite] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-slate-900"
    >
      <View className="w-full">
        <SafeAreaView className="w-full flex-row z-20 justify-between items-center py-4 px-3">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color={"white"} strokeWidth={2.5} size={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
            <HeartIcon
              color={isFavourite ? "red" : "white"}
              strokeWidth={2.5}
              size={30}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

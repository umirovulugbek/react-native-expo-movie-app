import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { IMG_URL } from "../utils/api";

export default function UpcomingMovie({ upcoming, title }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View className="mb-4 space-y-4">
      <Text className="text-red-400  text-xl ml-4 font-semibold">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {upcoming?.map((item) => (
          <View className="space-y-1 mr-4" key={item?.id}>
            <Image
              source={{ uri: IMG_URL + "w185" + item?.poster_path }}
              style={{ width: width * 0.35, height: height * 0.2 }}
              className={
                title === "Upcoming movie"
                  ? `rounded-3xl`
                  : title == "Popular movie"
                  ? "rounded-3xl"
                  : ""
              }
            />
            <Text className="text-white">
              {item?.title?.length > 12
                ? item?.title?.slice(0, 12) + "..."
                : item?.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

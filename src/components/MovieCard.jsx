import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { IMG_URL } from "../utils/api";

export default function MovieCard({ item }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Image
        source={{ uri: IMG_URL + "w500" + item?.item?.poster_path }}
        style={{ width: width * 0.7, height: height * 0.5 }}
        className="rounded-3xl"
      />
    </View>
  );
}

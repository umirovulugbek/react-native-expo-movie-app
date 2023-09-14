import React from "react";
import { Dimensions, Text, View } from "react-native";
import MovieCard from "./MovieCard";
import Carousel from "react-native-snap-carousel";

export default function TrendingMovie({ trending }) {
  const { width } = Dimensions.get("window"); // telefonni  widthini olib beradi.
  return (
    <View>
      
      <Text className="text-white text-xl mx-1 mb-5 mt-5" >
        <Carousel
          data={trending}
          renderItem={(item) => <MovieCard item={item} />}
          sliderWidth={width}
          inactiveSlideOpacity={0.6}
          firstItem={1}
          // slideStyle={{ display: "flex", items: "center" }}
          itemWidth={width * 0.7}
        />
      </Text>
    </View>
  );
}

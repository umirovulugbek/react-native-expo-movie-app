import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { IMG_URL } from "../utils/api";
import { useNavigation } from "@react-navigation/native";

export default function MovieCard({ item }) {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MovieDetail", item?.item?.id)}
    >
      <View>
        <Image
          source={{ uri: IMG_URL + "w500" + item?.item?.poster_path }}
          style={{ width: width * 0.7, height: height * 0.5 }}
          className="rounded-3xl"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

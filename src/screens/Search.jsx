import React, { useCallback, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Axios from "../utils/httpClinet";
import { useNavigation } from "@react-navigation/native";
import { api_key } from "../constant";
import { debounce } from "lodash";
import Loader from "../components/loader";
import { IMG_URL } from "../utils/api";

export default function Search() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [found, setFound] = useState(false);
  const HandleChange = (searchText) => {
    if (searchText?.length >= 3 && searchText) {
      setLoading(true);
      Axios()
        .get(
          `/search/movie?api_key=${api_key}&query=${searchText}&page=1&include_adult=false`
        )
        .then((res) => {
         
          setResults(res?.data?.results);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setResults([]);
    }
    if (searchText || searchText?.length !== 0) {
      setFound(true);
    }
  };

  const handleTextDobounce = useCallback(debounce(HandleChange, 600), []);

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-400 my-4 rounded-full">
        <TextInput
          onChangeText={handleTextDobounce}
          placeholder="Search movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base text-white font-semibold"
        />
        <TouchableOpacity
          className="rounded-full p-3 m-1 bg-neutral-400"
          onPress={() => navigation.navigate("Homescreen")}
        >
          <XMarkIcon color={"white"} size={25} />
        </TouchableOpacity>
      </View>

      {isLoading === true ? (
        <Loader />
      ) : results?.length > 0 ? (
        <ScrollView
          className="space-y-3"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <Text className="text-white font-semibold ml-1">
            Results ({results?.length})
          </Text>
          <View className=" flex-row justify-between flex-wrap">
            {results?.map((item) => (
              <TouchableWithoutFeedback
                key={item.id}
                onPress={() => navigation.navigate("MovieDetail", item?.id)}
              >
                <View className={"space-y-2 mb-4"}>
                  <Image
                    source={{ uri: IMG_URL + "w185" + item?.poster_path }}
                    className="rounded-3xl"
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                    }}
                  />
                  <Text className="text-gray-300 ml-1">
                    {item.title.length > 22
                      ? item.title.slice(0, 22) + "..."
                      : item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <>
          {found ? (
            <View className="justify-center">
              <Image
                source={require("../../assets/not-found.png")}
                className="h-96 w-96"
              />
              <Text className={"text-3xl text-white text-center"}>
                Movies not found
              </Text>
            </View>
          ) : null}
        </>
      )}
    </SafeAreaView>
  );
}

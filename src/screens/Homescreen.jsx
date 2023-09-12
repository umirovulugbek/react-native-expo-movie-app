import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Axios, { trendingMovie } from "../utils/httpClinet";
import TrendingMovie from "../components/TrendingMovie";
import { api_key } from "../constant";
import UpcommingMovie from "../components/UpcommingMovie";
import TopRatedMovie from "../components/TopRatedMovie";

export default function Home({ navigation }) {
  const [trending, setTrending] = useState([]);
  const [upComming, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTrandingMovies();
    getUpComing();
    getTopRated();
  }, []);

  const getUpComing = () => {
    Axios()
      .get(`/movie/upcoming?api_key=${api_key}`)
      .then((res) => {
        setUpComing(res?.data?.results);
      });
  };

  const getTopRated = () => {
    Axios()
      .get(`/movie/top_rated?api_key=${api_key}`)
      .then((res) => {
        setTopRated(res?.data?.results);
      });
  };

  const getTrandingMovies = () => {
    Axios()
      .get(trendingMovie)
      .then((res) => {
        // console.log(res?.data?.results, "ressss");
        setTrending(res?.data?.results);
      });
  };
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {trending?.length > 0 ? <TrendingMovie trending={trending} /> : null}
        {upComming?.length > 0 ? <UpcommingMovie /> : null}
        {topRated?.length > 0 ? <TopRatedMovie /> : null}
      </ScrollView>
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

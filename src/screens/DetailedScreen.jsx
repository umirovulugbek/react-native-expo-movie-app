import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import Axios from "../utils/httpClinet";
import { api_key } from "../constant";
import Loader from "../components/loader";
import { IMG_URL } from "../utils/api";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import UpcomingMovie from "../components/UpcomingMovie";
export default function DetailedScreen() {
  const navigation = useNavigation();
  const [isFavourite, setFavourite] = useState(false);
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { params: items } = useRoute([]);

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    getMovieDetail();
    getMovieCredits(); //ishtirok etgan artisla
    getSimilarMovie(); //shunga uxshash kinolar
  }, [items]);

  const getMovieDetail = () => {
    Axios()
      .get(`/movie/${items}?api_key=${api_key}`)
      .then((res) => {
        setMovie(res?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getMovieCredits = () => {
    Axios()
      .get(`/movie/${items}/credits?api_key=${api_key}`)
      .then((res) => {
        setCast(res?.data?.cast);
      });
  };
  const getSimilarMovie = () => {
    Axios()
      .get(`/movie/${items}/similar?api_key=${api_key}`)
      .then((res) => {
        setSimilar(res?.data?.results);
      });
  };
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-slate-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute w-full flex-row z-20 justify-between items-center py-4 px-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "orange",
              borderRadius: 12,
            }}
          >
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

        {isLoading === true ? (
          <Loader />
        ) : (
          <View>
            <Image
              style={{ width: width, height: height * 0.6 }}
              source={{ uri: IMG_URL + "w500" + movie?.poster_path }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23,23,23,0.8) ",
                "rgba(23,23,23,1)",
              ]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>

      <View className={"space-y-4"} style={{ marginTop: -40 }}>
        <Text
          className={
            "text-white text-center text-3xl font-bold tracking-widest"
          }
        >
          {movie?.title}
        </Text>
        {movie?.id ? (
          <Text
            className={"text-neutral-400 font-semibold text-base text-center"}
          >
            {movie?.status} • {movie?.release_date?.split("-")[0]} •{" "}
            {movie?.runtime} min
          </Text>
        ) : null}

        <View className={"flex-row justify-center mx-4 space-x-2"}>
          {movie?.genres?.map((genre, idx) => (
            <Text
              key={idx}
              className={"text-neutral-400 font-semibold text-base text-center"}
            >
              {genre?.name} {idx + 1 !== movie.genres.length ? " •" : null}
            </Text>
          ))}
        </View>

        <Text className={"text-neutral-400 mx-4 tracking-wide"}>
          {movie?.overview}
        </Text>
      </View>
      {movie?.id && cast?.length > 0 && <Cast cast={cast} />}

      {movie?.id && similar?.length > 0 && (
        <UpcomingMovie upcoming={similar} title={"Similar movies"} />
      )}
    </ScrollView>
  );
}

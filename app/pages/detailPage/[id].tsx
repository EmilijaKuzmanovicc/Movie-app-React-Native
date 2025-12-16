import { getDetailsOfMovie } from "@/app/api/MovieApi";
import ButtonIcon from "@/app/components/button/ButtonIcon";
import { EXPO_PUBLIC_IMAGE_URL } from "@env";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import detailStyles from "./detailStyle";
import { MovieDetail } from "./detailType";

const normalizeParam = (param: string | string[] | undefined): string | null => {
  if (!param) return null;
  return Array.isArray(param) ? param[0] : param;
};
export default function MovieDetailPage() {
  const [details, setDetails] = useState<MovieDetail | null>(null);
  const { id } = useLocalSearchParams();
  const style = detailStyles();
  const router = useRouter();
  const movieId = normalizeParam(id);
  if (!movieId) return null;
  const fetchData = async () => {
    const data = await getDetailsOfMovie(id.toString());
    setDetails(data);
  };
  useEffect(() => {
    fetchData();
  }, [movieId]);

  if (!details) {
    return (
      <SafeAreaView style={style.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  const imageUrl = `${EXPO_PUBLIC_IMAGE_URL}${details.poster_path}`;
  const genres = details.genres.map((e) => e.name).join(", ");
  const releaseDate = details.release_date.split("-")[0];
  console.log("time", details.runtime);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.page}>
        <ButtonIcon onClick={() => router.push("/")} icon="arrow-left" size={30} color="red" width={70} />

        <ScrollView contentContainerStyle={{ paddingBottom: 8 }} showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 8 }}>
          <Image source={{ uri: imageUrl }} style={style.image}></Image>
          <Text style={[style.text, style.title]}>{details.title}</Text>
          <Text style={style.text}>{details.runtime} min</Text>
          <View style={style.inRow}>
            <Text style={style.text}>
              {details.origin_country} - {releaseDate} - {details.adult ? "G" : "PG"} - IMDb: {details.vote_average.toFixed(2)}
            </Text>
          </View>
          <Text style={style.text}>{genres}</Text>
          <Text style={[style.text, { marginTop: 8 }]}>Overview: </Text>
          <Text style={[style.text, style.overview]} numberOfLines={4} ellipsizeMode="tail">
            {details.overview}
          </Text>
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
            <ButtonIcon onClick={() => router.push("/")} icon="chevron-right" size={30} color="red" text="WATCH NOW" width={200} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

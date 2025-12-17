import { getDetailsOfMovie } from "@/app/api/MovieApi";
import ButtonIcon from "@/app/components/button/ButtonIcon";
import { EXPO_PUBLIC_IMAGE_URL } from "@env";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import detailStyles from "./styles/detailStyle";
import { MovieDetail } from "./type/detailType";

export default function MovieDetailPage() {
  const [details, setDetails] = useState<MovieDetail | null>(null);
  const { id } = useLocalSearchParams();
  const style = detailStyles();
  const router = useRouter();

  if (!id) return null;
  const fetchData = async () => {
    const data = await getDetailsOfMovie(id.toString());
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!details) {
    return (
      <SafeAreaView style={[style.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={style.text}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const imageUrl = `${EXPO_PUBLIC_IMAGE_URL}${details.poster_path}`;
  const imageBackUrl = `${EXPO_PUBLIC_IMAGE_URL}${details.backdrop_path}`;
  const genres = details.genres.map((e) => e.name).join(", ");
  const releaseDate = details.release_date.split("-")[0];
  const isWeb = Platform.OS === "web";
  const country = Array.isArray(details.origin_country) ? details.origin_country.join(", ") : details.origin_country;

  const WatchButton = <ButtonIcon onClick={() => router.push("/pages/playerPage/[id]")} icon="chevron-right" size={isWeb ? 40 : 30} color="red" text="WATCH NOW" width={isWeb ? 286 : 200} height={isWeb ? 78 : 50} radius={50} />;
  const BackButton = <ButtonIcon onClick={() => router.push("/")} icon="arrow-left" size={Platform.OS === "web" ? 50 : 30} color="red" width={Platform.OS === "web" ? 112 : 70} radius={50} />;
  const Description = (
    <View style={style.inColumn}>
      <Text style={[style.text, { marginTop: 8 }]}>Overview: </Text>
      <Text style={[style.text, style.overview]} numberOfLines={isWeb ? 7 : 4} ellipsizeMode="tail">
        {details.overview}
      </Text>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>{WatchButton}</View>
    </View>
  );
  const Header = (
    <View>
      <Text style={style.text}>{genres}</Text>
      <Text style={style.text}>{details.runtime} min</Text>
      <View style={style.inRow}>
        <Text style={style.text}>
          {country} - {releaseDate} - {details.adult ? "G" : "PG"} - IMDb: {details.vote_average.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground source={{ uri: isWeb ? imageBackUrl : imageUrl }} style={style.page} resizeMode="cover">
        <View style={style.overlay}>
          {BackButton}
          {Platform.OS === "web" ? (
            <View style={[style.inColumn, { paddingTop: 30 }]}>
              {Header}
              <View style={[style.inRow]}>
                <Image source={{ uri: imageUrl }} style={style.vebImage}></Image>
                <View style={[style.inColumn, { paddingLeft: isWeb ? 70 : 0 }]}>
                  <Text style={[style.text, style.title]}>{details.title}</Text>
                  {Description}
                </View>
              </View>
            </View>
          ) : (
            <ScrollView contentContainerStyle={{ paddingBottom: 8 }} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
              <Image source={{ uri: imageUrl }} style={style.image}></Image>
              <Text style={[style.text, style.title]}>{details.title}</Text>
              {Header}
              {Description}
            </ScrollView>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

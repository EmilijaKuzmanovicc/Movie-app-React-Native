import { Movie } from "@/app/types/types";
import { EXPO_PUBLIC_IMAGE_URL } from "@env";
import { Image, Pressable, Text, View } from "react-native";
import movieStyle from "./movieStyle";

type MovieCardProps = Movie & {
  onClick: () => void;
};

export default function MovieCard({ title, poster_path, onClick }: MovieCardProps) {
  const style = movieStyle();

  const imageUrl = `${EXPO_PUBLIC_IMAGE_URL}${poster_path}`;
  return (
    <Pressable onPress={onClick}>
      <View style={style.movieContainer}>
        <Image source={{ uri: imageUrl }} style={style.image}></Image>
        <Text style={style.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

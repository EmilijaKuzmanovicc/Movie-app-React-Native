import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Platform, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMovies } from "./api/MovieApi";
import ButtonIcon from "./components/button/ButtonIcon";
import MovieCard from "./components/movie/movieCard";
import indexStyles from "./style";
import { Movie } from "./types/types";
export default function Index() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>();
  const router = useRouter();

  const fetchData = async () => {
    const newMovies = await getMovies();
    console.log(!newMovies);
    if (newMovies) {
      setMovies(newMovies);
      setAllMovies(newMovies);
    }
  };
  console.log("Platform.OS", Platform.OS);
  useEffect(() => {
    fetchData();
  }, []);
  const styles = indexStyles();

  const findMovie = (name?: string) => {
    if (!name) return setMovies(allMovies);

    const filteredMovies = allMovies.filter((movie) => movie.title.toLowerCase().includes(name.toLowerCase()));
    setMovies(filteredMovies);
  };
  const handlePress = (id: string) => {
    router.push({
      pathname: "/pages/detailPage/[id]",
      params: { id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput value={search} onChangeText={setSearch} placeholder="Search movie..." placeholderTextColor="#ffffff" style={styles.input} />
        <ButtonIcon onClick={() => findMovie(search?.toString())} icon="search" size={30} width={70} />
      </View>
      <FlatList
        data={movies}
        ListEmptyComponent={<Text style={styles.text}>No items</Text>}
        renderItem={({ item }) => <MovieCard {...item} onClick={() => handlePress(item.id.toString())} title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={Platform.OS === "web" ? 4 : 3}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

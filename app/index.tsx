import { useRouter } from "expo-router";
import { useEffect, useReducer, useState } from "react";
import { FlatList, Platform, Text, TextInput, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getMovies } from "./api/MovieApi";
import ButtonIcon from "./components/button/ButtonIcon";
import MovieCard from "./components/movie/movieCard";
import { initialState, reducer } from "./reducer";
import indexStyles from "./style";
import { COLORS } from "./constants/colors";

export default function Index() {
  const router = useRouter();
  const styles = indexStyles();
  const { width } = useWindowDimensions();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const size = Math.max(1, Math.floor(width / 300));

  const fetchData = async () => {
    if (state.loading || !state.hasMore) return;

    dispatch({ type: "FETCH_START" });

    try {
      const newMovies = await getMovies(state.page);

      if (newMovies && newMovies.length > 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: newMovies });
      } else {
        dispatch({ type: "FETCH_END_NO_MORE" });
      }
    } catch (err) {
      console.error(err);
      dispatch({ type: "FETCH_END_NO_MORE" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    if (!search) fetchData();
  };

  const findMovie = (text: string) => {
    setSearch(text);

    if (!text) {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [],
      });
      return;
    }

    const filtered = state.allMovies.filter((movie) => movie.title.toLowerCase().includes(text.toLowerCase()));

    state.movies = filtered;
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
        <TextInput value={search} onChangeText={findMovie} placeholder="Search movie..." placeholderTextColor={COLORS.WHITE} style={styles.input} />

        <ButtonIcon onClick={() => {}} icon="search" size={30} width={50} />

        <ButtonIcon onClick={() => setMenuVisible(!menuVisible)} icon="three-bars" size={30} width={50} />
      </View>

      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/");
            }}
          >
            Home
          </Text>

          <View style={styles.line} />

          <Text
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/pages/profile/[id]");
            }}
          >
            Profile
          </Text>
        </View>
      )}

      <FlatList
        data={state.movies}
        renderItem={({ item }) => <MovieCard {...item} onClick={() => handlePress(item.id.toString())} title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.text}>No items</Text>}
        numColumns={Platform.OS === "web" ? (width < 500 ? 3 : size) : 3}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={state.loading ? <Text style={styles.text}>Loading...</Text> : null}
      />
    </SafeAreaView>
  );
}

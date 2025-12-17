import ButtonIcon from "@/app/components/button/ButtonIcon";
import { COLORS } from "@/app/constants/colors";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { user } from "./data";
import profileStyles from "./styles/profileStyle";

export default function Profile() {
  const style = profileStyles();

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={style.profileHeader}>
          <Image source={{ uri: user.avatar }} style={style.avatar} />
          <Text style={style.name}>{user.name}</Text>
          <Text style={style.email}>{user.email}</Text>
        </View>
        <View style={style.statsContainer}>
          <View style={style.statItem}>
            <Text style={style.statNumber}>{user.watchedMovies}</Text>
            <Text style={style.statLabel}>Watched Movies</Text>
          </View>
          <View style={style.statItem}>
            <Text style={style.statNumber}>{user.favoriteGenre}</Text>
            <Text style={style.statLabel}>Favorite Genre</Text>
          </View>
        </View>
        <View style={style.buttonsContainer}>
          <ButtonIcon onClick={() => {}} text={"Edit Profile"} size={30} width={300} color={COLORS.BLUE} />
          <ButtonIcon onClick={() => {}} text={"Logout"} size={30} width={300} color={COLORS.RED} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

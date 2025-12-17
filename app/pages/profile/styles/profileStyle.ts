import { COLORS } from "@/app/constants/colors";
import { Platform, StyleSheet } from "react-native";

function profileStyles() {
  const size = Platform.OS === "web" ? 1.6 : 1;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.DARK_BACKGROUND,
    },
    scrollContainer: {
      height: "100%",
      padding: 20,
      alignItems: "center",
    },
    profileHeader: {
      alignItems: "center",
      marginBottom: 30,
    },
    avatar: {
      marginTop: 20,
      width: 130 * size,
      height: 130 * size,
      borderRadius: 100,
      marginBottom: 15,
    },
    name: {
      fontSize: 24 * size,
      fontWeight: "bold",
      color: COLORS.WHITE,
    },
    email: {
      fontSize: 16 * size,
      color: COLORS.WHITE,
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      maxWidth: 400,
      marginBottom: 30,
    },
    statItem: {
      alignItems: "center",
    },
    statNumber: {
      fontSize: 20 * size,
      fontWeight: "bold",
      color: COLORS.WHITE,
    },
    statLabel: {
      fontSize: 14 * size,
      color: COLORS.WHITE,
    },
    buttonsContainer: {
      width: "100%",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}

export default profileStyles;

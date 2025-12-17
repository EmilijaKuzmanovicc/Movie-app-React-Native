import { COLORS } from "@/app/constants/colors";
import { Platform, StyleSheet } from "react-native";

function detailStyles() {
  const size = Platform.OS === "web" ? 1.6 : 1;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.BACKGROUND,
    },
    page: {
      flex: 1,
      backgroundColor: COLORS.GREY,
      flexDirection: "column",
    },
    overlay: {
      flex: 1,
      padding: Platform.OS === "web" ? 70 : 12,
      backgroundColor: COLORS.BLACK_TRANSPARENT,
    },
    title: { fontSize: size * 22, fontWeight: "bold" },
    text: {
      paddingTop: 8,
      fontSize: size * 18,
      color: COLORS.WHITE,
    },
    overview: {
      fontSize: size * 14,
      maxWidth: 700,
      height: Platform.OS === "web" ? 240 : 80,
    },
    image: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: 12,
      height: 400 * size,
      width: "100%",
      borderRadius: 14,
    },
    vebImage: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: 12,
      height: 485,
      width: 325,
      borderRadius: 14,
    },
    inRow: {
      flexDirection: "row",
    },
    inColumn: {
      flexDirection: "column",
    },
  });
}

export default detailStyles;

import { Platform, StyleSheet } from "react-native";
import { COLORS } from "./constants/colors";

function indexStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: COLORS.BACKGROUND,
    },
    row: {
      position: "relative",
      marginTop: 8,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "row",
    },
    text: { margin: 8, fontSize: 12, width: 100, color: COLORS.WHITE },
    input: { flex: 1, backgroundColor: COLORS.GREY, padding: 10, borderRadius: 10, height: 40, color: "white" },
    dropdownMenu: {
      position: "absolute",
      top: Platform.OS === "web" ? 60 : 90,
      right: Platform.OS === "web" ? 50 : 10,
      backgroundColor: COLORS.LIGHT_WHITE,
      borderRadius: 8,
      paddingVertical: 10,
      width: 150,
      zIndex: 100,
    },
    menuItem: {
      color: COLORS.BLACK,
      paddingVertical: 10,
      paddingHorizontal: 15,
      fontSize: 16,
    },
    line: { height: 1, backgroundColor: COLORS.GREY, width: "90%", alignSelf: "center" },
  });
}

export default indexStyles;

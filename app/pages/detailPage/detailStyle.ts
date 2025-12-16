import { Platform, StyleSheet, useWindowDimensions } from "react-native";

function detailStyles() {
  const { width, height } = useWindowDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2b2828",
    },
    page: {
      padding: 12,
      flex: 1,
      backgroundColor: "#1f1e1e",
      height: "100%",
      flexDirection: "column",
    },
    title: { fontSize: (Platform.OS === "web" ? 1.4 : 1) * 22, fontWeight: "bold" },
    text: {
      paddingTop: 8,
      fontSize: (Platform.OS === "web" ? 1.4 : 1) * 16,
      color: "#ffffffff",
    },
    overview: {
      fontSize: (Platform.OS === "web" ? 1.4 : 1) * 12,
    },
    image: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: 12,
      height: 400,
      width: "100%",
      borderRadius: 14,
    },
    inRow: {
      flexDirection: "row",
    },
  });
}

export default detailStyles;

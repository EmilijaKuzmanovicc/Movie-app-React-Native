import { StyleSheet } from "react-native";

function indexStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#2b2828",
    },
    row: {
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "row",
    },
    text: { margin: 8, fontSize: 12, width: 100, color: "#fff" },
    input: { margin: 20, flex: 1, backgroundColor: "#444", padding: 10, borderRadius: 10, height: 40, width: "100%", color: "white" },
  });
}

export default indexStyles;

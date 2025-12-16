import { Platform, StyleSheet } from "react-native";

function buttonStyles() {
  return StyleSheet.create({
    button: {
      margin: 8,
      padding: 16,
      fontSize: (Platform.OS === "web" ? 1.4 : 1) * 16,
      backgroundColor: "#fff",
      color: "#000000ff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
    text: {
      fontSize: (Platform.OS === "web" ? 1.4 : 1) * 16,
      color: "#ffffffff",
    },
    buttonIcon: {
      marginLeft: 8,
      padding: 8,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 20,
    },
  });
}

export default buttonStyles;

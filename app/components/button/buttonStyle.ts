import { COLORS } from "@/app/constants/colors";
import { Platform, StyleSheet } from "react-native";

function buttonStyles() {
  return StyleSheet.create({
    text: {
      fontSize: (Platform.OS === "web" ? 1.6 : 1) * 16,
      color: COLORS.WHITE,
      fontWeight: "500",
    },
    buttonIcon: {
      margin: 4,
      padding: 8,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  });
}

export default buttonStyles;

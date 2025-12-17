import { COLORS } from "@/app/constants/colors";
import { Dimensions, StyleSheet } from "react-native";

function PlayerStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.BLACK,
    },
    video: {
      width: Dimensions.get("window").width,
      height: "100%",
    },
  });
}

export default PlayerStyle;

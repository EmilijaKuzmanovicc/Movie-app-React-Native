import { COLORS } from "@/app/constants/colors";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";

function movieStyle() {
  const { width, height } = useWindowDimensions();
  const size = Platform.OS === "web" ? (width < 500 ? 4 : width / 300 + 1) : 4;
  const cardWidth = width / size;
  const cardHeight = width / size;

  return StyleSheet.create({
    image: {
      width: cardWidth,
      height: cardHeight * 1.4,
      borderRadius: 12,
      backgroundColor: COLORS.GREY,
    },
    text: {
      paddingTop: 4,
      fontSize: 3 * size,
      width: cardWidth,
      color: COLORS.WHITE,
    },
    movieContainer: {
      padding: 12,
      flexDirection: "column",
    },
  });
}
export default movieStyle;

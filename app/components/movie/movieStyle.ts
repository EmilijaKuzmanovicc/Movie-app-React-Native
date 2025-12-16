import { Platform, StyleSheet, useWindowDimensions } from "react-native";

function movieStyle() {
  const size = Platform.OS === "web" ? 7 : 4;
  const { width, height } = useWindowDimensions();
  console.log("width", width);
  const cardWidth = width / size;
  const cardHeight = width / size;

  return StyleSheet.create({
    image: {
      width: cardWidth,
      height: cardHeight * 1.4,
      borderRadius: 5,
      backgroundColor: "#514e4eff",
    },
    text: {
      paddingTop: 4,
      fontSize: 3 * size,
      width: cardWidth,
      color: "#fff",
    },
    movieContainer: {
      padding: 12,
      flexDirection: "column",
    },
  });
}
export default movieStyle;

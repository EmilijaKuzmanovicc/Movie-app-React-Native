import Octicons from "@expo/vector-icons/Octicons";
import { Pressable, Text } from "react-native";
import buttonStyles from "./buttonStyle";

interface ButtonType {
  onClick: () => void;
  icon: React.ComponentProps<typeof Octicons>["name"];
  size: number;
  color?: string;
  text?: string;
  width: number;
}

export default function ButtonIcon({ onClick, icon, size, color, text, width }: ButtonType) {
  const styles = buttonStyles();
  console.log(text);
  return (
    <Pressable onPress={onClick} style={[styles.buttonIcon, { width: width, backgroundColor: color }]}>
      <Octicons name={icon} size={size} color="white" />
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
}

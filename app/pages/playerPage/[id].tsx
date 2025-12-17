import { ResizeMode, Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import detailStyles from "../detailPage/styles/detailStyle";
import PlayerStyle from "./style/playerStyle";

export default function PlayerPage() {
  const video = React.useRef(null);
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  };

  const unlockOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  };
  const style = PlayerStyle();
  const safeAreaStyle = detailStyles();
  return (
    <SafeAreaView style={safeAreaStyle.container}>
      <View style={style.container}>
        <Video
          ref={video}
          style={style.video}
          source={{
            uri: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={true}
          onFullscreenUpdate={async (event) => {
            if (event.fullscreenUpdate === 1) {
              lockLandscape();
            } else if (event.fullscreenUpdate === 2) {
              unlockOrientation();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

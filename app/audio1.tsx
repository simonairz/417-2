import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

function Audio1(_props: any) {
  const video = React.useRef(null);
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/sculpture.png")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Nesewin Sculpture</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Click below to start listening."
            onPress={toggleControls}
            color="#2bf30c" // Adjusted button color
          />
        </View>
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/music/Papercut.mp3")}
            useNativeControls={showControls}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

export default Audio1;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 200,
    color: "white",
  },
  buttonContainer: {
    marginBottom: 8,
    fontWeight: "bold",
    marginTop: 5,
  },
  videoContainer: {
    width: "90%",
    aspectRatio: 16 / 9,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 100,
  },
  video: {
    flex: 1,
  },
});

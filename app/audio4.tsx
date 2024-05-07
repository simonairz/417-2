import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";
import { Link } from "expo-router";

function Audio4(_props: any) {
  const video = React.useRef(null);
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Travel to the Future</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Click below to start listening."
          onPress={toggleControls}
          color="black" // Adjusted button color
        />
      </View>
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/music/breakingTheHabit.mp3")}
          useNativeControls={showControls}
        />
      </View>
      <StatusBar style="auto" />
      <Link style={styles.navigator} href={"/audioTourMap"}>
        {" "}
        Back to Audio Tour Map{" "}
      </Link>
    </View>
  );
}

export default Audio4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8a9a87",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 60,
    marginTop: 30,
  },
  buttonContainer: {
    marginBottom: 5,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    elevation: 6,
    backgroundColor: "#5d6d5d",
    marginTop: 5,
  },
  video: {
    flex: 1,
  },
  navigator: {
    backgroundColor: "lightblue",
    color: "black",
    borderRadius: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    overflow: "hidden",
    marginBottom: 40,
    marginTop: 200,
  },
});

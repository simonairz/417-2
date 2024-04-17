import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

function Audio1(props) {
  const video = React.useRef(null);
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nesewin Sculpture</Text>
      <Button
        title="Audio1: Click Below for Audio tour"
        onPress={toggleControls}
        color="green" // Customize button color
      />
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/music/Papercut.mp3")}
          useNativeControls={showControls}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

export default Audio1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a9a87', // Forest green background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // White text color
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9, // Assuming a standard video aspect ratio
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6, // Add shadow to give depth
    backgroundColor: '#5d6d5d', // Darker green background
  },
  video: {
    flex: 1,
  },
});

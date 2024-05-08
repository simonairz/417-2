//Index.tsx
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, router, useNavigation } from "expo-router";
import { markers, mapFocus } from "../assets/markers";
import * as Location from "expo-location";

export default function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showInstruction, setShowInstruction] = useState<boolean>(true);
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={focusMap}>
          <View style={{ padding: 10 }}>
            <Text>Focus</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  const focusMap = () => {
    const dunningReadFocus = {
      latitude: 41.952972,
      longitude: -87.800167,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    mapRef.current?.animateToRegion(dunningReadFocus);
  };

  // GET USER LOCATION  for Android Requires Expo Location 2
  const userLocation = async () => {
    //Requesting Permission for Location Android needs this
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("GPS functionality turned off");
      console.log(status);
    }
    let location = await Location.getCurrentPositionAsync();
    let setUpMapRegion = () => ({
      latiude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  userLocation();
  const INITIAL_REGION = {
    latitude: 37.1948,
    longitude: -122.0,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const onMarkerSelected = (marker: any) => {
    setAudioPlaying(true); // Set audio playing state to true when marker is selected
    Alert.alert(
      marker.name,
      "Would you like to listen to the audio for this area?",
      // prompt the user if he want to listen to the audio selected
      [
        {
          text: "Yes",
          onPress: () => router.navigate("/audio" + marker.audioNumber),
        },
        { text: "No" },
      ]
    );
  };

  const onRegionChange = (region: Region) => {
    console.log(region);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={mapFocus}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        onRegionChangeComplete={onRegionChange}
        showsUserLocation
        showsMyLocationButton
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.name}
            coordinate={marker}
            onPress={() => onMarkerSelected(marker)}
          ></Marker>
        ))}
      </MapView>
      {showInstruction && (
        <TouchableOpacity
          style={styles.instructionContainer}
          onPress={() => setShowInstruction(false)}
        >
          <Text style={styles.instructionText}>
            Please choose one location below to start listening to the audio.
          </Text>
        </TouchableOpacity>
      )}
      <Link style={styles.navigator} href={"/"}>
        {" "}
        Back to Home Page{" "}
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginTop: 670,
    width: 250,
  },
  instructionContainer: {
    position: "absolute",
    overflow: "hidden",
    top: 5,
    left: 20,
    right: 20,
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
  },
  instructionText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

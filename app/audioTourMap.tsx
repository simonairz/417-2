import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, router, useNavigation } from "expo-router";
import { markers, mapFocus } from "../assets/markers";
import * as Location from "expo-location";
import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";

const App = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showInstruction, setShowInstruction] = useState<boolean>(true);
  const [mapRegion, setMapRegion] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Calculate the bounding containing all markers
    const initialRegion = calculateMapRegion();
    setMapRegion(initialRegion);

    const focusMap = () => {
      if (mapRegion) {
        mapRef.current?.animateToRegion(mapRegion);
      }
    };
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

  const calculateMapRegion = (): Region => {
    if (markers.length === 0) {
      return mapFocus; // return to map focus if no markers
    }

    let minLat = markers[0].latitude;
    let maxLat = markers[0].latitude;
    let minLng = markers[0].longitude;
    let maxLng = markers[0].longitude;

    for (let i = 1; i < markers.length; i++) {
      minLat = Math.min(minLat, markers[i].latitude);
      maxLat = Math.max(maxLat, markers[i].latitude);
      minLng = Math.min(minLng, markers[i].longitude);
      maxLng = Math.max(maxLng, markers[i].longitude);
    }

    const padding = 0.1;
    const region = {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta: Math.abs(maxLat - minLat) + padding,
      longitudeDelta: Math.abs(maxLng - minLng) + padding,
    };

    return region;
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
  const onMarkerSelected = (marker: any) => {
    setAudioPlaying(true); // Set audio playing state to true when marker is selected
    Alert.alert(
      marker.name,
      "Would you like to listen to the audio for this area?",
      [
        {
          text: "Yes",
          onPress: () => {
            router.navigate("/audio" + marker.audioNumber);
            setAudioPlaying(true); // Set audio playing state to false
          },
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
        initialRegion={mapRegion || mapFocus} // Use calculated region
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
          />
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
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "lightblue",
    color: "black",
    borderRadius: 20,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    overflow: "hidden",
    marginTop: 650,
    width: 200,
  },
  instructionContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    right: 20,
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
  },
  instructionText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;

//Index.tsx
import React, { useEffect, useRef } from "react";
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Region,
} from "react-native-maps";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router, useNavigation } from "expo-router";
import { markers, mapFocus } from "../assets/markers";
import { onClickMapMarker } from "./onClickMapMarker";
import * as Location from "expo-location";
import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";

// Coordinates for Area 1
let area1 = [
  {
    latitude: 41.9533,
    longitude: -87.804471,
  },
  {
    latitude: 41.953499,
    longitude: -87.804533,
  },
  {
    latitude: 41.953489,
    longitude: -87.804205,
  },
  {
    latitude: 41.953296,
    longitude: -87.804228,
  },
];

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
  let userCoords = location.coords;

  // Checking if User is in Area
  function isinsidePolygon(userlocation: GeolibInputCoordinates) {
    let bol = geolib.isPointInPolygon(userlocation, area1);
    console.log(bol);
    // IF in location alert if they want to hear the audiob
    if (bol) {
      Alert.alert(
        "Audio tour?",
        "Would you like to hear the tour for this area?",
        [
          { text: "Yes", onPress: () => router.navigate("/audio1") },
          { text: "No" },
        ]
      );
    }
  }
  isinsidePolygon(userCoords);
  console.log(userCoords);
};
userLocation();

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

export default function App() {
  const mapRef = useRef<any>(null);
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
      latitude: 41.95337,
      longitude: -87.804362,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    mapRef.current?.animateToRegion(dunningReadFocus);
  };

  const onMarkerSelected = (marker: any) => {
    Alert.alert(
      marker.name,
      "Would you like to listen to the audio for this area?",
      //"Would you like to listen to the audio for " + marker.name ,
      [
        {
          text: "Yes",
          onPress: () => router.navigate("/audio" + marker.audioNumber),
        },
        { text: "No" },
      ]
    );
  };

  const calloutPressed = (ev: any) => {
    console.log(ev);
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
          >
            {/* <Callout onPress={calloutPressed}>
							<View style={{ padding: 10 }}>
								<Text style={{ fontSize: 24 }}>Hello</Text>
							</View>
						</Callout> */}
          </Marker>
        ))}

        <Polygon
          // VISUAL OF AREA POLYGONS
          strokeColor="red"
          fillColor="blue"
          strokeWidth={2}
          coordinates={area1}
        />
      </MapView>
    </View>
  );
}

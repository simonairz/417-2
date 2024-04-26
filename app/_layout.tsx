//_layout.tsx
import React from "react";
import { Stack } from "expo-router";

const Layout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: "Dunning Read" }} />
    <Stack.Screen name="about" options={{ title: " " }} />
    <Stack.Screen name="explore" options={{ title: " " }} />
    <Stack.Screen name="birdInfo" options={{ title: " " }} />
    <Stack.Screen name="animalInfo" options={{ title: " " }} />
    <Stack.Screen name="insectInfo" options={{ title: "Bugs" }} />
    <Stack.Screen name="plantInfo" options={{ title: "Plants" }} />
    <Stack.Screen name="privacy" options={{ title: " " }} />
    <Stack.Screen name="terms" options={{ title: " " }} />
    <Stack.Screen name="audioTourMap" options={{ title: "Audio Tour Map" }} />
    <Stack.Screen
      name="audio1"
      options={{ title: " Nesewin Sculpture Audio " }}
    />
  </Stack>
);

export default Layout;

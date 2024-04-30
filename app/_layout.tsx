//_layout.tsx
import React from "react";
import { Stack } from "expo-router";
const Layout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: "Dunning Read" }} />
    <Stack.Screen name="audioTourMap" options={{ title: " " }} />
    <Stack.Screen name="explore" options={{ title: " " }} />
    <Stack.Screen name="aboutus" options={{ title: " " }} />
    <Stack.Screen name="birdsInfo" options={{ title: "Explore Wildlife " }} />
    <Stack.Screen name="animalsInfo" options={{ title: "Explore Wildlife" }} />
    <Stack.Screen name="insectsInfo" options={{ title: "Explore Wildlife" }} />
    <Stack.Screen name="plantsInfo" options={{ title: "Explore Wildlife" }} />
    <Stack.Screen name="privacy" options={{ title: " " }} />
    <Stack.Screen name="terms" options={{ title: " " }} />
    <Stack.Screen name="audio1" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio2" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio3" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio4" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio5" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio6" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio7" options={{ title: " Dunning Read " }} />
    <Stack.Screen name="audio8" options={{ title: " Dunning Read " }} />
  </Stack>
);
export default Layout;

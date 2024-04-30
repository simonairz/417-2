import { Link, router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function index(_props: any) {
  return (
    <LinearGradient colors={["red", "yellow"]} style={styles.background}>
      <Image
        source={require("../assets/images/exploreLinks/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Dunning Read Natural Area</Text>

      <Link style={styles.audioNavigate} href={"/audioTourMap"}>
        <Text style={styles.audioNavigateText}>Audio Tour Map</Text>
      </Link>
      <Link style={styles.exploreNavigate} href={"/explore"}>
        <Text style={styles.exploreNavigateText}>Explore Wildlife</Text>
      </Link>
      <View style={styles.infoNavigateContainer}>
        <Link style={styles.infoNavigateText} href={"/aboutus"}>
          <Text style={styles.infoNavigateText}>Learn About Us</Text>
        </Link>
      </View>
      <View style={styles.privacyContainer}>
        <Link style={styles.privacyText} href={"/privacy"}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
        </Link>
      </View>
      <View style={styles.termsContainer}>
        <Link style={styles.termsText} href={"/terms"}>
          <Text style={styles.termsText}>Terms of Use</Text>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180, // Adjust the width and height as needed
    height: 180,
    marginBottom: 20,
    marginTop: 1,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkgreen",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 30,
    marginTop: 1, // Adjusted marginTop to make the title stand out at the top
  },
  audioNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 2,
  },
  audioNavigateText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  exploreNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 10,
  },
  exploreNavigateText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  infoNavigateContainer: {
    backgroundColor: "lightgreen",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 10,
  },
  infoNavigateText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  privacyContainer: {
    marginBottom: 2,
    marginTop: 15,
    alignItems: "flex-start",
  },

  privacyText: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "bold",
  },

  termsContainer: {
    marginBottom: 2,
    marginTop: 5,
    alignItems: "flex-start",
    // flexDirection: "row",
  },

  termsText: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default index;

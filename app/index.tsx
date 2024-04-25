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
      <Text style={styles.title}>DUNNING READ NATURAL AREA</Text>
      <Link style={styles.audioNavigate} href={"/audioTourMap"}>
        <Text style={styles.audioNavigateText}>Audio Tour Map</Text>
      </Link>
      <Link style={styles.exploreNavigate} href={"/explore"}>
        <Text style={styles.exploreNavigateText}>Explore Wildlife</Text>
      </Link>
      <View style={styles.infoNavigateContainer}>
        <Link style={styles.infoNavigateText} href={"/about"}>
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
    width: 120, // Adjust the width and height as needed
    height: 120,
    marginBottom: 20,
    marginTop: 18,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "lightgreen",
    textAlign: "center",
    marginBottom: 40,
    marginTop: 10, // Adjusted marginTop to make the title stand out at the top
  },
  audioNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
  audioNavigateText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  exploreNavigate: {
    backgroundColor: "lightgreen",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
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
    marginBottom: 20,
    //flexDirection: "row",
    // marginBottom: 20,
  },
  infoNavigateText: {
    color: "black",
    //textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 10,
  },
  privacyContainer: {
    marginBottom: 5,
    marginTop: 5,
    //flexDirection: "row",
  },

  privacyText: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "bold",
    // marginRight: 10,
  },

  termsContainer: {
    marginBottom: 5,
    marginTop: 5,
    alignItems: "flex-start",
    //flexDirection: "row",
  },

  termsText: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "bold",
    // marginRight: 10,
  },
});

export default index;

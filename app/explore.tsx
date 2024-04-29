import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

function explore(_props: any) {
  return (
    <LinearGradient
      colors={["dodgerblue", "aqua", "green"]}
      style={styles.background}
    >
      <Text style={styles.title}> Explore Wildlife </Text>

      <Link style={styles.navigator} href={"/birdsInfo"}>
        {" "}
        Birds{" "}
      </Link>
      <Link style={styles.navigator} href={"/animalsInfo"}>
        {" "}
        Animals{" "}
      </Link>
      <Link style={styles.navigator} href={"/insectsInfo"}>
        {" "}
        Insects{" "}
      </Link>
      <Link style={styles.navigator} href={"/plantsInfo"}>
        {" "}
        Plants{" "}
      </Link>

      <Link style={styles.navigate} href={"/"}>
        {" "}
        Back To Home Page{" "}
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 25,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  imageLink: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 20,

    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 35,
  },
  navigator: {
    backgroundColor: "darkblue",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 15,
    width: 150,
    textAlign: "center",
  },

  navigate: {
    backgroundColor: "lightblue",
    color: "black",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 110,
  },
});

export default explore;

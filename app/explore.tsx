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

      <Link style={styles.navigator} href={"/birdInfo"}>
        {" "}
        Birds{" "}
      </Link>
      <Link style={styles.navigator} href={"/animalInfo"}>
        {" "}
        Animals{" "}
      </Link>
      <Link style={styles.navigator} href={"/insectInfo"}>
        {" "}
        Bugs{" "}
      </Link>
      <Link style={styles.navigator} href={"/plantInfo"}>
        {" "}
        Plants{" "}
      </Link>

      <Link style={styles.navigator} href={"/"}>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  imageLink: {
    height: 250,
    width: 300,
    marginLeft: 30,
  },
  navigator: {
    backgroundColor: "darkblue",
    color: "white",
    paddingVertical: 8,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 15,
    marginTop: 35,
    width: 200,
    textAlign: "center",
  },
});

export default explore;

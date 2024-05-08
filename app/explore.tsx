import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
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
        Back to Home Page{" "}
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
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  navigator: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 10,
    marginTop: 20,
    width: 150,
    textAlign: "center",
  },

  navigate: {
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
    marginTop: 160,
    marginBottom: 40,
  },
});

export default explore;

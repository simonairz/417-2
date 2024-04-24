import { View, SafeAreaView, StyleSheet } from "react-native";
import { terms } from "./terms";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "flex-end",
    //justifyContent: "flex-start",
  },
  scrollView: {
    backgroundColor: "lightgreen",
    marginHorizontal: 20,
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  safeHeader: {
    marginTop: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    textDecorationLine: "underline",
  },
  safeContent: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    // alignItems: "center",
  },

  clickLink: {
    fontWeight: "bold",
    color: "red",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  indexNavigator: {
    backgroundColor: "blue",
    //paddingVertical: 2,
    //paddingHorizontal: 2,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
    color: "black",
    fontSize: 16,
    //width: 200,
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default terms;

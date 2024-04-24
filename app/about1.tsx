import { View, SafeAreaView, StyleSheet } from "react-native";
import { about } from "./about";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "lightgreen",
    marginHorizontal: 15,
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  missionHeader: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    textDecorationLine: "underline",
  },
  missionContent: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    alignItems: "center",
  },
  volunteerLink: {
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
export default about;

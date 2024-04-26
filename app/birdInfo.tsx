import { SafeAreaView, StyleSheet } from "react-native";
import { Explore } from "./Explore.1";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: " ",
    marginHorizontal: 15,
  },

  title: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "darkblue",
    color: "white",
    paddingVertical: 8,
    fontSize: 13,
    //fontWeight: "bold",
    borderRadius: 15,
    marginTop: 15,
    width: 200,
    textAlign: "center",
    //height: 70,
    //width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "lightpink",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "darkblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalCloseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigator: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 8,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    textAlign: "center",
  },
});

export default Explore;

import { SafeAreaView, StyleSheet } from "react-native";
import { Explore } from "./Explore.2";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: " ",
    marginHorizontal: 15,
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "darkblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "darkblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigator: {
    backgroundColor: "black",
    color: "white",
    //paddingVertical: 8,
    fontSize: 15,
    fontWeight: "bold",
    // borderRadius: 15,
    marginTop: 20,
    // width: 200,
    textAlign: "center",
  },
});

export default Explore;

import React, { useState } from "react";
import { Link } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  View,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const firstBirdImage = require("../assets/images/exploreLinks/Amcrow.jpg");
const secondBirdImage = require("../assets/images/exploreLinks/Amgold.jpg");
const thirdBirdImage = require("../assets/images/exploreLinks/Amrobin.jpg");
const fourthBirdImage = require("../assets/images/exploreLinks/Baltimore.jpg");
const fifthBirdImage = require("../assets/images/exploreLinks/Black.jpg");
const sixthBirdImage = require("../assets/images/exploreLinks/Brown.jpg");
const seventhBirdImage = require("../assets/images/exploreLinks/Grackle.jpg");
const eighthBirdImage = require("../assets/images/exploreLinks/Starling.jpg");
const ninthBirdImage = require("../assets/images/exploreLinks/House.jpg");
const tenthBirdImage = require("../assets/images/exploreLinks/Cardinal.jpg");
const eleventhBirdImage = require("../assets/images/exploreLinks/Redtail.jpg");
const twelfthBirdImage = require("../assets/images/exploreLinks/Redwing.jpg");

export function Explore(_props: any) {
  const [showFirstBirdInfo, setShowFirstBirdInfo] = useState(false);
  const [showSecondBirdInfo, setShowSecondBirdInfo] = useState(false);
  const [showThirdBirdInfo, setShowThirdBirdInfo] = useState(false);
  const [showFourthBirdInfo, setShowFourthBirdInfo] = useState(false);
  const [showFifthBirdInfo, setShowFifthBirdInfo] = useState(false);
  const [showSixthBirdInfo, setShowSixthBirdInfo] = useState(false);
  const [showSeventhBirdInfo, setShowSeventhBirdInfo] = useState(false);
  const [showEighthBirdInfo, setShowEighthBirdInfo] = useState(false);
  const [showNinthBirdInfo, setShowNinthBirdInfo] = useState(false);
  const [showTenthBirdInfo, setShowTenthBirdInfo] = useState(false);
  const [showEleventhBirdInfo, setShowEleventhBirdInfo] = useState(false);
  const [showTwelfthBirdInfo, setShowTwelfthBirdInfo] = useState(false);

  const handleFirstBirdPress = () => {
    setShowFirstBirdInfo(true);
  };

  const handleSecondBirdPress = () => {
    setShowSecondBirdInfo(true);
  };

  const handleThirdBirdPress = () => {
    setShowThirdBirdInfo(true);
  };

  const handleFourthBirdPress = () => {
    setShowFourthBirdInfo(true);
  };

  const handleFifthBirdPress = () => {
    setShowFifthBirdInfo(true);
  };

  const handleSixthBirdPress = () => {
    setShowSixthBirdInfo(true);
  };

  const handleSeventhBirdPress = () => {
    setShowSeventhBirdInfo(true);
  };

  const handleEighthBirdPress = () => {
    setShowEighthBirdInfo(true);
  };

  const handleNinthBirdPress = () => {
    setShowNinthBirdInfo(true);
  };

  const handleTenthBirdPress = () => {
    setShowTenthBirdInfo(true);
  };

  const handleEleventhBirdPress = () => {
    setShowEleventhBirdInfo(true);
  };

  const handleTwelfthBirdPress = () => {
    setShowTwelfthBirdInfo(true);
  };

  const closeModal = () => {
    setShowFirstBirdInfo(false);
    setShowSecondBirdInfo(false);
    setShowThirdBirdInfo(false);
    setShowFourthBirdInfo(false);
    setShowFifthBirdInfo(false);
    setShowSixthBirdInfo(false);
    setShowSeventhBirdInfo(false);
    setShowEighthBirdInfo(false);
    setShowNinthBirdInfo(false);
    setShowTenthBirdInfo(false);
    setShowEleventhBirdInfo(false);
    setShowTwelfthBirdInfo(false);
  };

  return (
    <LinearGradient
      colors={["dodgerblue", "aqua", "green"]}
      style={styles.background}
    >
      <Text style={styles.title}> Birds</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.button} onPress={handleFirstBirdPress}>
          <Text style={styles.buttonText}>American Crow</Text>
          <Image source={firstBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSecondBirdPress}>
          <Text style={styles.buttonText}>American GoldFinch</Text>
          <Image source={secondBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleThirdBirdPress}>
          <Text style={styles.buttonText}>American Robin</Text>
          <Image source={thirdBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFourthBirdPress}>
          <Text style={styles.buttonText}>Baltimore Oriole</Text>
          <Image source={fourthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFifthBirdPress}>
          <Text style={styles.buttonText}>Black Capped Chickadee</Text>
          <Image source={fifthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSixthBirdPress}>
          <Text style={styles.buttonText}>Brown Headed Cowbird</Text>
          <Image source={sixthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSeventhBirdPress}
        >
          <Text style={styles.buttonText}>Common Grackle</Text>
          <Image source={seventhBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEighthBirdPress}>
          <Text style={styles.buttonText}>European Starling</Text>
          <Image source={eighthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNinthBirdPress}>
          <Text style={styles.buttonText}>House Sparrow</Text>
          <Image source={ninthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTenthBirdPress}>
          <Text style={styles.buttonText}>Northern Cardinal</Text>
          <Image source={tenthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleEleventhBirdPress}
        >
          <Text style={styles.buttonText}>Red Tailed Hawk</Text>
          <Image source={eleventhBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleTwelfthBirdPress}
        >
          <Text style={styles.buttonText}>Red Winged Black Bird</Text>
          <Image source={twelfthBirdImage} style={styles.modalImage1} />
        </TouchableOpacity>
      </ScrollView>

      <Link style={styles.navigator} href={"/"}>
        {" "}
        Back To Home Page{" "}
      </Link>

      {/* Modal to display American Crow information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFirstBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>American Crow</Text>
            {/* Add the American Crow image */}
            <Image source={firstBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The American crow is a large, intelligent bird known for its
              adaptability and distinctive cawing sound. It is found throughout
              North America and is often seen in urban and suburban areas.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Another Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSecondBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>American Goldfinch</Text>
            {/* Add the Another Bird image */}
            <Image source={secondBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The American Goldfinch is often found in open areas near thistle
              plants. Listen for its flight call, which sounds like,
              “po-ta-to-chip.”
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Third Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showThirdBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>American Robin</Text>
            {/* Add the Third Bird image */}
            <Image source={thirdBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The American Robin is known as the harbinger of spring. You may
              find this orange-breasted bird hunting for earthworms, or sitting
              in a tree chirping, “cheerily cheer up.”
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Fourth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFourthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Baltimore Oriole</Text>
            {/* Add the Fourth Bird image */}
            <Image source={fourthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The brightly-colored Baltimore Oriole sings a whistling song. It
              eats fruit and weaves a nest that hangs high off the ground.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Fifth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFifthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Black-capped Chickadee</Text>
            {/* Add the Fifth Bird image */}
            <Image source={fifthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Black-capped Chickadee is a tiny bird with a black cap and
              bib. Known for its “chicka-dee-dee-dee” call, the bird often hides
              seeds to eat later. You may see a chickadee hanging upside down on
              a tree branch.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Sixth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSixthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Brown-headed Cowbird</Text>
            {/* Add the Sixth Bird image */}
            <Image source={sixthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Brown-headed Cowbird lays its eggs in the nests of other
              birds, leaving its young to be raised by other species. Look for
              it in fields and meadows..
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Seventh Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSeventhBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Common Grackle</Text>
            {/* Add the Seventh Bird image */}
            <Image source={seventhBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Common Grackle is found in open woodlands and marshes. The
              species is taller and has a longer tail than other similar-looking
              birds.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Eighth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEighthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>European Starling</Text>
            {/* Add the Eighth Bird image */}
            <Image source={eighthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The European Starling was first brought to New York by Shakespeare
              enthusiasts. The birds are now found across the country, and often
              move in large, noisy flocks.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Ninth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showNinthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>House Sparrow</Text>
            {/* Add the Ninth Bird image */}
            <Image source={ninthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The House Sparrow is frequently found at backyard feeders, and
              often nests in manmade structures, like the eaves of buildings or
              in street lights.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Tenth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showTenthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Northern Cardinal</Text>
            {/* Add the Tenth Bird image */}
            <Image source={tenthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The male Northern Cardinal is an eye-catching bright red, while
              the female is mostly brown. Both have a sharp crest and may sound
              as if they’re saying, “Cheer! Cheer! Cheer!” or “Birdie, birdie,
              birdie!”
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Eleventh Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showEleventhBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Red-tailed Hawk</Text>
            {/* Add the Eleventh Bird image */}
            <Image source={eleventhBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Look for the Red-tailed Hawk soaring above open fields, where it
              hunts for voles and rabbits. Notice its broad wings and short
              tail.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Twelfth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showTwelfthBirdInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Red-winged Blackbird</Text>
            {/* Add the Twelfth Bird image */}
            <Image source={twelfthBirdImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Red-winged Blackbird is common in the DRNA and other wetlands
              across the U.S. Look for the male’s red and yellow shoulder
              patches, and listen for its conk-la-lee song.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: " ",
    marginHorizontal: 20,
  },

  title: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,
    fontSize: 13,
    //fontWeight: "bold",
    borderRadius: 15,
    marginTop: 25,
    width: 150,
    textAlign: "center",
    //height: 70,
    //width: 200,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "100%",
    overflow: "hidden",
  },
  modalImage1: {
    alignItems: "flex-start",
    width: 160, // Adjust the width as needed
    height: 90, // Adjust the height as needed
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
    overflow: "hidden",
  },
  //picture's title
  modalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  //picture's size
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
    textAlign: "left",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 15,
  },
  modalCloseText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigator: {
    backgroundColor: "lightblue",
    color: "black",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 10,
  },
});

export default Explore;

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

const ashtreeImage = require("../assets/images/exploreLinks/Ashtree.jpg");
const bigblueImage = require("../assets/images/exploreLinks/Bigblue.jpg");
const buckhornImage = require("../assets/images/exploreLinks/Buckthorn.jpg");
const daisyImage = require("../assets/images/exploreLinks/Daisy.jpg");
const horsetailImage = require("../assets/images/exploreLinks/Horsetail.jpg");
const joepyeImage = require("../assets/images/exploreLinks/Joepye.jpg");
const newenglandImage = require("../assets/images/exploreLinks/NewEngland.jpg");
const phragmitesImage = require("../assets/images/exploreLinks/Phragmites.jpg");
const prairieImage = require("../assets/images/exploreLinks/Prairie.jpg");
const redoakImage = require("../assets/images/exploreLinks/RedOak.jpg");
const teaselImage = require("../assets/images/exploreLinks/Teasel.jpg");
const wildbergamotImage = require("../assets/images/exploreLinks/WildBergamot.jpg");

export function Explore(_props: any) {
  const [showAshtreeInfo, setShowAshtreeInfo] = useState(false);
  const [showBigblueInfo, setShowBigblueInfo] = useState(false);
  const [ShowBuckhornInfo, setShowBuckhornInfo] = useState(false);
  const [ShowDaisyInfo, setShowDaisyInfo] = useState(false);
  const [ShowHorsetailInfo, setShowHorsetailInfo] = useState(false);
  const [showJoepyeInfo, setShowJoepyeInfo] = useState(false);
  const [showNewenglandInfo, setShowNewenglandInfo] = useState(false);
  const [showPhragmitesInfo, setShowPhragmitesInfo] = useState(false);
  const [showPrairieInfo, setShowPrairieInfo] = useState(false);
  const [showRedoakInfo, setShowRedoakInfo] = useState(false);
  const [showTeaselInfo, setShowTeaselInfo] = useState(false);
  const [showWildbergamotInfo, setShowWildbergamotInfo] = useState(false);

  const handleAshtreePress = () => {
    setShowAshtreeInfo(true);
  };

  const handleBigbluePress = () => {
    setShowBigblueInfo(true);
  };

  const handleBuckthornPress = () => {
    setShowBuckhornInfo(true);
  };

  const handleDaisyPress = () => {
    setShowDaisyInfo(true);
  };

  const handleHorsetailPress = () => {
    setShowHorsetailInfo(true);
  };

  const handleJoepyePress = () => {
    setShowJoepyeInfo(true);
  };

  const handleNewenglandPress = () => {
    setShowNewenglandInfo(true);
  };

  const handlePhragmitesPress = () => {
    setShowPhragmitesInfo(true);
  };

  const handlePrairiePress = () => {
    setShowPrairieInfo(true);
  };

  const handleRedoakPress = () => {
    setShowRedoakInfo(true);
  };

  const handleTeaselPress = () => {
    setShowTeaselInfo(true);
  };

  const handleWildbergamotPress = () => {
    setShowWildbergamotInfo(true);
  };

  const closeModal = () => {
    setShowAshtreeInfo(false);
    setShowBigblueInfo(false);
    setShowBuckhornInfo(false);
    setShowDaisyInfo(false);
    setShowHorsetailInfo(false);
    setShowJoepyeInfo(false);
    setShowNewenglandInfo(false);
    setShowPhragmitesInfo(false);
    setShowPrairieInfo(false);
    setShowRedoakInfo(false);
    setShowTeaselInfo(false);
    setShowWildbergamotInfo(false);
  };

  return (
    <LinearGradient
      colors={["dodgerblue", "aqua", "green"]}
      style={styles.background}
    >
      <Text style={styles.title}> Plants </Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.button} onPress={handleAshtreePress}>
          <Text style={styles.buttonText}>White Ash Tree</Text>
          <Image source={ashtreeImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBigbluePress}>
          <Text style={styles.buttonText}>Big Bluestem</Text>
          <Image source={bigblueImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBuckthornPress}>
          <Text style={styles.buttonText}>Common Buckhorn</Text>
          <Image source={buckhornImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDaisyPress}>
          <Text style={styles.buttonText}>Daisy Fleabane </Text>
          <Image source={daisyImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleHorsetailPress}>
          <Text style={styles.buttonText}>Horsetail</Text>
          <Image source={horsetailImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleJoepyePress}>
          <Text style={styles.buttonText}>Joe Pye Weed</Text>
          <Image source={joepyeImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNewenglandPress}>
          <Text style={styles.buttonText}> New England Aster</Text>
          <Image source={newenglandImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePhragmitesPress}>
          <Text style={styles.buttonText}>Phragmites</Text>
          <Image source={phragmitesImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePrairiePress}>
          <Text style={styles.buttonText}>Prairie Coreopsis</Text>
          <Image source={prairieImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRedoakPress}>
          <Text style={styles.buttonText}>Red Oak</Text>
          <Image source={redoakImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTeaselPress}>
          <Text style={styles.buttonText}>Teasel </Text>
          <Image source={teaselImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleWildbergamotPress}
        >
          <Text style={styles.buttonText}>Wild Bergamot</Text>
          <Image source={wildbergamotImage} style={styles.modalImage1} />
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
        visible={showAshtreeInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>White ash trees</Text>
            {/* Add the American Crow image */}
            <Image source={ashtreeImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              White ash trees grow between 50 to 100 feet tall in upload
              woodlands and city parks. They have leaves that are arranged
              opposite each other.
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
        visible={showBigblueInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Big Bluestem</Text>
            {/* Add the Another Bird image */}
            <Image source={bigblueImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Big Bluestem grass can grow up to eight feet tall. It is often
              used for erosion control, and provides habitat to ground-nesting
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

      {/* Modal to display Third Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={ShowBuckhornInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Common Buckhorn</Text>
            {/* Add the Third Bird image */}
            <Image source={buckhornImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Common Buckhorn can grow up to 25’ tall. First introduced as a
              landscaping plant, this species can spread rapidly and displace
              native plants.
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
        visible={ShowDaisyInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Daisy Fleabane </Text>
            {/* Add the Fourth Bird image */}
            <Image source={daisyImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Daisy Fleabane grows between one and three feet tall. Its small
              flowers look like daisies with a yellow center and thin white
              peals.
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
        visible={ShowHorsetailInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Horsetail</Text>
            {/* Add the Fifth Bird image */}
            <Image source={horsetailImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Horsetail has a jointed stem that bears a cone. The cone releases
              spores to the wind.
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
        visible={showJoepyeInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Joe Pye Weed </Text>
            {/* Add the Sixth Bird image */}
            <Image source={joepyeImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Joe Pye Weed produces large, pink flower heads that attract
              pollinators. It grows in moist soil, so it is often found in
              marshes.
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
        visible={showNewenglandInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}> New England Aster</Text>
            {/* Add the Seventh Bird image */}
            <Image source={newenglandImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The New England Aster can grow up to four feet tall. Its lavender
              flowers have gold centers and bloom in late summer.
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
        visible={showPhragmitesInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Phragmites</Text>
            {/* Add the Eighth Bird image */}
            <Image source={phragmitesImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Phragmites is a tall grass that quickly spreads through wetlands
              and out competes many native wetland species.
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
        visible={showPrairieInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Prairie Coreopsis</Text>
            {/* Add the Ninth Bird image */}
            <Image source={prairieImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Prairie Coreopsis produces yellow flowers. It grows in full sun in
              prairies, savannas, and abandoned fields.
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
        visible={showRedoakInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Red Oak</Text>
            {/* Add the Tenth Bird image */}
            <Image source={redoakImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Red Oak trees grow up to 100 feet tall and produce acorns. In
              fall, red oak trees’ green leaves change to a bright red.
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
        visible={showTeaselInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Teasel</Text>
            {/* Add the Eleventh Bird image */}
            <Image source={teaselImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Teasel is a tall, invasive plant with big seed heads. Each plant
              can produce thousands of seeds.
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
        visible={showWildbergamotInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Wild Bergamot</Text>
            {/* Add the Twelfth Bird image */}
            <Image source={wildbergamotImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              A native plant, Wild Bergamot produces tufted pink or lavender
              flowers that attract bees and butterflies. Its leaves smell a bit
              like oregano.
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  button: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,
    fontSize: 13,
    borderRadius: 15,
    marginTop: 25,
    width: 150,
    textAlign: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
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
  modalImage1: {
    alignItems: "flex-start",
    width: 150, // Adjust the width as needed
    height: 94, // Adjust the height as needed
    marginBottom: 0,
    marginTop: 10,
    resizeMode: "cover",
    borderRadius: 10,
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

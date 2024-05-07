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
const ashtreeImage = require("../assets/images/exploreLinks/Ashtree.jpg");
const wildbergamotImage = require("../assets/images/exploreLinks/WildBergamot.jpg");

export function Explore(_props: any) {
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
  const [showAshtreeInfo, setShowAshtreeInfo] = useState(false);
  const [showWildbergamotInfo, setShowWildbergamotInfo] = useState(false);

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

  const handleAshtreePress = () => {
    setShowAshtreeInfo(true);
  };

  const handleWildbergamotPress = () => {
    setShowWildbergamotInfo(true);
  };

  const closeModal = () => {
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
    setShowAshtreeInfo(false);
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
        <TouchableOpacity style={styles.button} onPress={handleAshtreePress}>
          <Text style={styles.buttonText}>White Ash Tree</Text>
          <Image source={ashtreeImage} style={styles.modalImage1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleWildbergamotPress}
        >
          <Text style={styles.buttonText}>Wild Bergamot</Text>
          <Image source={wildbergamotImage} style={styles.modalImage1} />
        </TouchableOpacity>
      </ScrollView>

      <Link style={styles.navigator} href={"/explore"}>
        {" "}
        Back to Explore Wildlife{" "}
      </Link>

      {/* Modal to display First Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.fs.usda.gov/wildflowers/plant-of-the-week/andropogon_gerardii.shtml"
                }
              >
                Big Bluestem
              </Link>{" "}
              grass can grow up to eight feet tall. It is often used for erosion
              control, and provides habitat to ground-nesting birds.
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

      {/* Modal to display Second Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/trees/plants/cm_buckthorn.htm"
                }
              >
                Common Buckhorn
              </Link>{" "}
              can grow up to 25’ tall. First introduced as a landscaping plant,
              this species can spread rapidly and displace native plants.
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

      {/* Modal to display Third Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/prairie/plantx/ds_fleabanex.htm"
                }
              >
                Daisy Fleabane
              </Link>{" "}
              grows between one and three feet tall. Its small flowers look like
              daisies with a yellow center and thin white peals.
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

      {/* Modal to display Fourth Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/grasses/plants/cm_horsetail.htm"
                }
              >
                Horsetail
              </Link>{" "}
              has a jointed stem that bears a cone. The cone releases spores to
              the wind.
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

      {/* Modal to display Fifth plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/wetland/plants/sp_joepye.htm"
                }
              >
                Joe Pye Weed
              </Link>{" "}
              produces large, pink flowerheads that attract pollinators. It
              grows in moist soil, so it is often found in marshes.
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

      {/* Modal to display Sixth Plant information */}
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
              The{" "}
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/prairie/plantx/ne_asterx.htm"
                }
              >
                New England Aster
              </Link>{" "}
              can grow up to four feet tall. Its lavender flowers have gold
              centers and bloom in late summer.
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

      {/* Modal to display Seventh Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://extension.illinois.edu/invasives/invasive-phragmites"
                }
              >
                Phragmites
              </Link>{" "}
              is a tall grass that quickly spreads through wetlands and
              outcompetes many native wetland species.
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

      {/* Modal to display Eighth Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/prairie/plantx/pr_coreopsisx.htm"
                }
              >
                Prairie Coreopsis
              </Link>{" "}
              produces yellow flowers. It grows in full sun in prairies,
              savannas, and abandoned fields.
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

      {/* Modal to display Ninth Plant Bird information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/trees/plants/red_oak.html"
                }
              >
                Red Oak
              </Link>{" "}
              trees grow up to 100 feet tall and produce acorns. In fall, red
              oak trees’ green leaves change to a bright red.
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

      {/* Modal to display Tenth Plant information */}
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
              <Link
                style={styles.Link}
                href={
                  "https://extension.illinois.edu/blogs/know-how-know-more/2017-03-22-beware-invasive-teasel-plant"
                }
              >
                Teasel
              </Link>{" "}
              is a tall, invasive plant with big seed heads. Each plant can
              produce thousands of seeds.
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
      {/* Modal to display Eleventh Plant information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAshtreeInfo}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>White Ash Trees</Text>
            {/* Add the American Crow image */}
            <Image source={ashtreeImage} style={styles.modalImage} />
            <Text style={styles.modalText}>
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/trees/plants/white_ash.html"
                }
              >
                White Ash Trees
              </Link>{" "}
              grow between 50 to 100 feet tall in upload woodlands and city
              parks. They have leaves that are arranged opposite each other.
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
              A native plant,{" "}
              <Link
                style={styles.Link}
                href={
                  "https://www.illinoiswildflowers.info/prairie/plantx/wld_bergamotx.htm"
                }
              >
                Wild Bergamot
              </Link>{" "}
              produces tufted pink or lavender flowers that attract bees and
              butterflies. Its leaves smell a bit like oregano.
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
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,
    fontSize: 13,
    borderRadius: 15,
    marginTop: 25,
    width: 180,
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

  buttonText2: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "150%",
    overflow: "hidden",
    marginBottom: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalImage1: {
    alignItems: "flex-start",
    width: 180, // Adjust the width as needed
    height: 104, // Adjust the height as needed
  },
  modalContent: {
    backgroundColor: "beige",
    padding: 20,
    fontSize: 25,
    borderRadius: 15,
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
    width: 470, // Adjust the width as needed
    height: 270, // Adjust the height as needed
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  modalCloseText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  Link: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  navigator: {
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
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Explore;

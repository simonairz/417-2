import React, { useState } from "react";
import { Link } from "expo-router";
import { styles } from "./animalInfo";
import {
  Text,
  Image,
  TouchableOpacity,
  Modal,
  View,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const animal1Image = require("../assets/images/exploreLinks/Coyote.jpg");
const animal2Image = require("../assets/images/exploreLinks/Dekaysnake.jpg");
const animal3Image = require("../assets/images/exploreLinks/Cottontail.jpg");
const animal4Image = require("../assets/images/exploreLinks/Graysquirrel.jpg");
const animal5Image = require("../assets/images/exploreLinks/Foxsquirrel.jpg");
const animal6Image = require("../assets/images/exploreLinks/Brownbat.jpg");
const animal7Image = require("../assets/images/exploreLinks/Meadow.jpg");
const animal8Image = require("../assets/images/exploreLinks/Opossum.jpg");
const animal9Image = require("../assets/images/exploreLinks/Plainsgarter.jpg");
const animal10Image = require("../assets/images/exploreLinks/Prairiecrayfish.jpg");
const animal11Image = require("../assets/images/exploreLinks/Raccoon.jpg");
const animal12Image = require("../assets/images/exploreLinks/Skunk.jpg");

export function Explore(_props: any) {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [showPopup10, setShowPopup10] = useState(false);
  const [showPopup11, setShowPopup11] = useState(false);
  const [showPopup12, setShowPopup12] = useState(false);

  const handleButtonPress1 = () => {
    setShowPopup1(true);
  };
  const handleButtonPress2 = () => {
    setShowPopup2(true);
  };

  const handleButtonPress3 = () => {
    setShowPopup3(true);
  };

  const handleButtonPress4 = () => {
    setShowPopup4(true);
  };

  const handleButtonPress5 = () => {
    setShowPopup5(true);
  };

  const handleButtonPress6 = () => {
    setShowPopup6(true);
  };

  const handleButtonPress7 = () => {
    setShowPopup7(true);
  };

  const handleButtonPress8 = () => {
    setShowPopup8(true);
  };

  const handleButtonPress9 = () => {
    setShowPopup9(true);
  };

  const handleButtonPress10 = () => {
    setShowPopup10(true);
  };

  const handleButtonPress11 = () => {
    setShowPopup11(true);
  };

  const handleButtonPress12 = () => {
    setShowPopup12(true);
  };

  const handleClosePopup1 = () => {
    setShowPopup1(false);
  };

  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };

  const handleClosePopup3 = () => {
    setShowPopup3(false);
  };

  const handleClosePopup4 = () => {
    setShowPopup4(false);
  };

  const handleClosePopup5 = () => {
    setShowPopup5(false);
  };

  const handleClosePopup6 = () => {
    setShowPopup6(false);
  };

  const handleClosePopup7 = () => {
    setShowPopup7(false);
  };

  const handleClosePopup8 = () => {
    setShowPopup8(false);
  };

  const handleClosePopup9 = () => {
    setShowPopup9(false);
  };

  const handleClosePopup10 = () => {
    setShowPopup10(false);
  };

  const handleClosePopup11 = () => {
    setShowPopup11(false);
  };

  const handleClosePopup12 = () => {
    setShowPopup12(false);
  };

  const closeModal = () => {
    setShowPopup1(false);
    setShowPopup2(false);
    setShowPopup3(false);
    setShowPopup4(false);
    setShowPopup5(false);
    setShowPopup6(false);
    setShowPopup7(false);
    setShowPopup8(false);
    setShowPopup9(false);
    setShowPopup10(false);
    setShowPopup11(false);
    setShowPopup12(false);
  };

  return (
    <LinearGradient
      colors={["dodgerblue", "aqua", "green"]}
      style={styles.background}
    >
      <Text style={styles.title}> Animals</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.button} onPress={handleButtonPress1}>
          <Text style={styles.buttonText}>Coyote</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress2}>
          <Text style={styles.buttonText}>Dekay Snake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress3}>
          <Text style={styles.buttonText}>Eastern Cottontail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress4}>
          <Text style={styles.buttonText}>Eastern Gray Squirrel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress5}>
          <Text style={styles.buttonText}>Fox Squirrel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress6}>
          <Text style={styles.buttonText}>Brown Bat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress7}>
          <Text style={styles.buttonText}>Meadow Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress8}>
          <Text style={styles.buttonText}>Opossum</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress9}>
          <Text style={styles.buttonText}>Plains Garter Snake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress10}>
          <Text style={styles.buttonText}>Prairie Crayfish</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress11}>
          <Text style={styles.buttonText}>Raccoon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonPress12}>
          <Text style={styles.buttonText}>Skunk</Text>
        </TouchableOpacity>

        <Link style={styles.navigator} href={"/"}>
          {" "}
          Back To Home Page{" "}
        </Link>
      </ScrollView>

      {/* Modal to display American Crow information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup1}
        onRequestClose={handleClosePopup1}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal1Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The coyote is found in woodlands and prairies across the state. It
              eats rodents, fruits, and carrots, and tipycally weighs between 20
              and 40 pounds.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup1}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Another Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup2}
        onRequestClose={handleClosePopup2}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal2Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The DeKay’s Brown Snake is a brown snake that measures roughly a
              foot long. You may find it under rocks or logs.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup2}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Third Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup3}
        onRequestClose={handleClosePopup3}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal3Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Eastern Cottontail has brown fur and a white belly and throat.
              It eats grasses, fruits, seeds, and bark. Look for it in wooded
              areas and near brush and shrubs.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup3}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Fourth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup4}
        onRequestClose={handleClosePopup4}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal4Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Eastern Gray Squirrel has a long, bushy tail that helps it
              balance when it’s climbing trees. It eats fruit, tree bark,
              leaves, and nuts, and builds leaf nests in trees.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup4}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Fifth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup5}
        onRequestClose={handleClosePopup5}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal5Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Fox Squirrel is a rust-yellow color, and a long tail. It lives
              near oak trees and wooded areas, and eats nuts, fruit, flowers,
              leaves, and insects.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup5}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Sixth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup6}
        onRequestClose={handleClosePopup6}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal6Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Little Brown Bat has shiny, brown fur, and wings that are
              attached to the sides of is feet. It commonly eats insects.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup6}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Seventh Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup7}
        onRequestClose={handleClosePopup7}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal7Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Meadow Vole is mostly black with some red fur. It burrows
              underground. Look for it near streams, marshes, or other wet
              areas. .
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup7}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Eighth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup8}
        onRequestClose={handleClosePopup8}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal8Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The opossum has a hairless tail that helps it balance and an
              opposable toe on its hind foot that helps it climb. When
              threatened, it will play dead or hiss.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup8}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Ninth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup9}
        onRequestClose={handleClosePopup9}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal9Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Plains Garter Snake is black with yellow stripes on its body.
              It eats frogs, earthworms, and even small mammals and birds. You
              may see it basking in the sun.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup9}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Tenth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup10}
        onRequestClose={handleClosePopup10}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal10Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Prairie Crayfish digs burrows in wet prairie areas. You may
              find it near ditches, like the channel that flows across the DRNA.
              .
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup10}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Eleventh Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup11}
        onRequestClose={handleClosePopup11}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal11Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The raccoon climbs well and may use a tree cavity for a den. It
              eats small animals such as mice, as well as nuts, fruit, insects,
              and garbage.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup11}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal to display Twelfth Bird information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup12}
        onRequestClose={handleClosePopup12}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Image source={animal12Image} style={styles.modalImage} />
            <Text style={styles.modalText}>
              The Striped Skunk is active at night. When threatened, it will
              stomp its feet and then may spray its familiar stench.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleClosePopup12}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

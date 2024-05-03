import React from "react";
import { Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export function Explore(_props: any) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/treeBackground.jpg")}
    >
      <Text style={styles.title}>DUNNING READ NATURAL AREA</Text>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.safeHeader}>Privacy Policy</Text>
        <Text style={styles.safeContent}>
          This privacy policy applies to the Dunning Read Natural Area Map app
          (hereby referred to as "Application") for mobile devices that was
          created by Dunning Read Developers (hereby referred to as "Service
          Provider") as an Open-Source service. This service is intended for use
          "AS IS".
        </Text>
        <Text style={styles.safeHeader}> Information Collection and Use</Text>
        <Text style={styles.safeContent}>
          The Application collects information when you download and use it.
          This information may include information such as:
          <Text style={styles.safeContent}>
            1- Your device's Internet Protocol Address (e.g. IP address). 2- The
            page
          </Text>
          Internet Protocol address (e.g. IP address). 2- The pages of the
          Application that you visit, the time and date of your visit, the time
          spent on those pages. 3- The time spent on the Application. 4- The
          operating system you use on your mobile device. The Application
          collects your device's location, which helps the Service Provider
          determine your approximate geographical location and make use of in
          below ways: 5- Geolocation Services: The Service Provider utilizes
          location data to provide features such as personalized content,
          relevant recommendations, and location-based services. 6- Third-Party
          Services: Periodically, the Service Provider may transmit anonymized
          location data to external services. These services assist them in
          enhancing the Application and optimizing their offerings.
        </Text>
        <Text style={styles.safeHeader}> Third Party Access </Text>
        <Text style={styles.safeContent}>
          Only aggregated, anonymized data is periodically transmitted to
          external services to aid the Service Provider in improving the
          Application and their service. The Service Provider may share your
          information with third parties in the ways that are described in this
          privacy statement. Please note that the Application utilizes
          third-party services that have their own Privacy Policy about handling
          data. Below are the links to the Privacy Policy of the third-party
          service providers used by the Application: .{" "}
          <Link
            style={styles.clickLink}
            href={"https://policies.google.com/privacy"}
          >
            Google
          </Link>{" "}
          <Link style={styles.clickLink} href={"https://expo.dev/privacy"}>
            Expo
          </Link>{" "}
          The Service Provider may disclose User Provided and Automatically
          Collected Information: as required by law, such as to comply with a
          subpoena, or similar legal process; when they believe in good faith
          that disclosure is necessary to protect their rights, protect your
          safety or the safety of others, investigate fraud, or respond to a
          government request; with their trusted services providers who work on
          their behalf, do not have an independent use of the information we
          disclose to them, and have agreed to adhere to the rules set forth in
          this privacy statement.
        </Text>
        <Text style={styles.safeHeader}>Third-Party Location Services </Text>
        <Text style={styles.safeContent}>
          Our application utilizes third-party location services to provide
          mapping and location functionalities. Specifically, we use: Apple Maps
          for devices running on iOS. Google Maps for devices operating on
          Android. These services help enhance your user experience by allowing
          accurate mapping and navigation features within our app. Please note
          that by using our application, location data may be collected and
          processed by these third-party services. We do not store or retain any
          location data ourselves. For more information on how location data is
          managed, please refer to the privacy policies of the respective
          services:
          <Link
            style={styles.clickLink}
            href={"https://policies.google.com/privacy"}
          >
            Apple Maps Privacy Policy
          </Link>{" "}
          <Link
            style={styles.clickLink}
            href={"https://policies.google.com/privacy"}
          >
            Google Maps/Google Privacy Policy
          </Link>{" "}
        </Text>

        <Text style={styles.safeHeader}>Opt-Out Rights</Text>
        <Text style={styles.safeContent}>
          You can stop all collection of information by the Application easily
          by uninstalling it. You may use the standard uninstall processes as
          may be available as part of your mobile device or via the mobile
          application marketplace or network.
        </Text>

        <Text style={styles.safeHeader}>Data Retention Policy</Text>
        <Text style={styles.safeContent}>
          he Service Provider does not collect or store any user data. As our
          Application operates without retaining user information, there are no
          concerns regarding the storage, retention, or deletion of personal
          data. Should you have any questions or concerns regarding our data
          practices, please feel free to contact us at [email]. We are committed
          to ensuring clarity and transparency in our operations and will
          respond to all inquiries within a reasonable timeframe.
        </Text>
        <Text style={styles.safeHeader}>Changes</Text>
        <Text style={styles.safeContent}>
          This Privacy Policy may be updated from time to time for any reason.
          The Service Provider will notify you of any changes to the Privacy
          Policy by updating this page with the new Privacy Policy. You are
          advised to consult this Privacy Policy regularly for any changes, as
          continued use is deemed approval of all changes. This privacy policy
          is effective as of 2024-04-30
        </Text>
        <Text style={styles.safeHeader}> Your Consent</Text>
        <Text style={styles.safeContent}>
          By using the Application, you are consenting to the processing of your
          information as set forth in this Privacy Policy now and as amended by
          us.
        </Text>
        <Text style={styles.safeHeader}> Contact Us</Text>
        <Text style={styles.safeContent}>
          If you have any questions regarding privacy while using the
          Application, or have questions about the practices, please contact the
          Service Provider via email at [email].
        </Text>
      </ScrollView>
      <Link style={styles.indexNavigator} href={"/"}>
        {" "}
        Back to Home Page{" "}
      </Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "lightgreen",
    marginHorizontal: 20,
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  safeHeader: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "left",
    alignItems: "center",
    textDecorationLine: "underline",
  },
  safeContent: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "black",
    //fontWeight: "bold",
    fontSize: 23,
    textAlign: "left",
    alignItems: "center",
  },

  clickLink: {
    fontWeight: "bold",
    color: "red",
    fontSize: 25,
    textDecorationLine: "underline",
  },

  Link: {
    fontWeight: "bold",
    color: "red",
    fontSize: 25,
    textDecorationLine: "underline",
  },
  indexNavigator: {
    backgroundColor: "lightblue",
    color: "black",
    borderRadius: 20,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 10,
  },
});

export default Explore;

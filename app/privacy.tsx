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
      <Text style={styles.title}>Privacy Policy</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.safeHeader}>Introduction</Text>
        <Text style={styles.safeContent}>
          The Chicago Park District ("Park District”) is committed to
          maintaining your online privacy. The Park District On-Line Privacy
          Policy applies to data collected from the Chicago Park District
          websites. Any information that you volunteer or that we send to you in
          response is transferred using industry standard encryption
          technologies. The following explains the Park District's privacy
          policy for all visitors to all Chicago Park District domains.
        </Text>
        <Text style={styles.safeHeader}>
          {" "}
          Disclosure of Personally Identifying Information
        </Text>
        <Text style={styles.safeContent}>
          Your name, when linked with another identifier such as your address,
          telephone number or other personally identifying information, is
          private information and will not be given to the general public,
          including third parties for direct mail or advertising purposes. The
          Chicago Park District ("Park District") needs this information to
          enroll a participant in a recreational program or membership, and to
          be able to contact you, if necessary. If you do not provide the
          information, the participant may not be able to enroll in the
          requested program or membership. The information you provide may be
          released to: persons authorized to have access to the information
          under state or federal law; persons authorized by court order to have
          access to the information; persons to whom you have given written
          consent to have access to the information; and all individuals
          employed by or entities under contract with the Park District who have
          a need or a right to know the information in order to administer,
          manage and improve Park District programming or services.
        </Text>
        <Text style={styles.safeHeader}> Sale of Data </Text>
        <Text style={styles.safeContent}>
          We do not sell data for direct mail or advertising purposes.
        </Text>
        <Text style={styles.safeHeader}>
          Information Gathering and Cookies{" "}
        </Text>
        <Text style={styles.safeContent}>
          If you visit our App to read or download information, such as event
          schedules, facility locations, or job openings, we capture and store
          information to speed up the performance of web page delivery. A cookie
          is a very small text file inserted onto your computer by a App that
          you visit. When you return to the App, the cookie is then read by the
          site's web server. Cookies are used for many things, from making Apps
          more personal to tracking your web browsing habits.
        </Text>
        <Text style={styles.safeHeader}>
          How the Chicago Park District Uses Information Gathering & Cookies
        </Text>
        <Text style={styles.safeContent}>
          Analytical Purposes: The Park District uses cookies through Google
          Analytics to analyze user activity to gain important insights about
          how to improve the functionality and user experience of the App. Your
          Preferences & User Experience: The Park District also uses cookies to
          gather information about users, such as browser type, server, and
          language preference in order to store user preferences on our app to
          make the user experience more consistent and convenient. To learn more
          about how Google Analytics uses your data{" "}
          <Link
            style={styles.clickLink}
            href={"https://policies.google.com/technologies/partner-sites"}
          >
            click here.
          </Link>{" "}
        </Text>
        <Text style={styles.safeHeader}>
          Sending the Park District an Email
        </Text>
        <Text style={styles.safeContent}>
          We value your feedback. If you send the Park District an email with
          questions or comments about our programs or services, we do collect
          your email address and any other information that you volunteer. We
          occasionally will share this information with other nonprofit
          organizations, or our sister agencies such as the City of Chicago or
          the Chicago Public Schools.
        </Text>
        <Text style={styles.safeHeader}> Disclaimer</Text>
        <Text style={styles.safeContent}>
          The Park District website contains links to other websites. These
          include links to websites operated by other government agencies,
          nonprofit organizations and private businesses, including but not
          limited to the websites of our vendors. The Park District does not
          endorse, sponsor, or provide preferential treatment to any third-party
          websites or persons or other entities associated with third-party
          websites. The Park District does not control third-party websites and,
          therefore, does not warrant that third-party websites are accurate or
          reliable or have operational links. By selecting a link to a
          third-party website or clicking on an advertisement, users leave
          chicagoparkdistrict.com and become subject to the terms of use,
          privacy, and security policies of the owners/sponsors/operators of the
          third-party website. By selecting a link to a third-party website or
          clicking on an advertisement users release the Park District, its
          agents, officers, or employees from any liability for any injury to
          any person or property caused by the user's or users' accessing a
          third-party website via a link on the Park District's website.
          Although we work to provide reliable, accurate content on a timely
          basis, neither the Park District, nor any of, its agents, officers, or
          employees warrants the accuracy, reliability or timeliness of any
          information published by this system, nor endorses any content,
          viewpoints, products, or services linked from this system, and shall
          not be held liable for any losses caused by reliance on the accuracy,
          reliability or timeliness of such information. Portions of such
          information may be incorrect or not current. Any person or entity who
          relies on any information obtained from this system does so at their
          own risk. Reference in this website to any specific commercial
          products, processes, or services, or the use of any trade, firm, or
          corporation name is for the information and convenience of the public
          and does not constitute the Park District’s endorsement,
          recommendation, or favoring by the Park District, its officers,
          employees or agents. We reserve the right to revise and update this
          Privacy Policy at any time without notice by posting the revision on
          our site.
        </Text>
      </ScrollView>
      <Link style={styles.indexNavigator} href={"/"}>
        {" "}
        Back To Home Page{" "}
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
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  safeHeader: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    alignItems: "center",
    textDecorationLine: "underline",
  },
  safeContent: {
    marginTop: 10,
    marginHorizontal: 15,
    color: "black",
    //fontWeight: "bold",
    fontSize: 15,
    textAlign: "left",
    alignItems: "center",
  },

  clickLink: {
    fontWeight: "bold",
    color: "red",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  indexNavigator: {
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

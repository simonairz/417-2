import { Link, router } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function index(props) {
    return (
        <LinearGradient colors={['dodgerblue','aqua','green']}style={styles.background}>
            <Text style={styles.title}>
                DUNNING READ NATURAL AREA
            </Text>
            <Link style={styles.audioNavigate } href={"/audioTourMap"}>
                    <Text> Audio Tour</Text>
            </Link>
          <Link style={styles.exploreNavigate} href={"/explore"}>Explore WildLife</Link>
          <View style={styles.infoNavigateContainer}>
            <Link style={styles.infoNavigateText} href={"/about"}>About Us</Link>
          </View>
          </LinearGradient>
    );
}




const styles = StyleSheet.create({
    background: {  
        flex: 1,
        alignItems: 'center',
    },

    title:{
        marginTop: 20,
        fontSize:23,
        fontWeight:"bold",
        },

    audioNavigate: {
        fontSize: 40,
        marginTop: 20,
        backgroundColor: 'green',
        width: 300,
        borderRadius: 150,
        flex: .58,
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
    },
    exploreNavigate:{
        backgroundColor: "darkblue",
        color: "white",
        paddingVertical: 8,
        paddingHorizontal: 70,
        fontSize:20,
        fontWeight:"bold",
        borderRadius: 15,
        marginTop: 15,
    },

    infoNavigateContainer: {
       flexDirection: "row"
    },
    infoNavigateText:{
        color: "white",
        textDecorationLine: "underline",
        fontSize: 28,
        marginHorizontal: 12,
        marginTop:20,
        fontWeight:"bold"
    }


    
})
export default index;
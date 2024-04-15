import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


function explore(props) {
    return (
        <LinearGradient colors={['dodgerblue','aqua','green']}style={styles.background} >
            <Text style={styles.title }> Learn About Our Wild Life</Text>
            <Link style={styles.navigator} href={"/"}> Back To Home </Link>
            <Link style={styles.navigator} href={"/birdInfo"}> Birds </Link>
            <Link style={styles.navigator} href={"/insectInfo"}> Insects </Link>
            <Link style={styles.navigator} href={"/plantInfo"}> Plantlife </Link>
            <Link style={styles.navigator} href={"/animalInfo"}> Other Animals </Link>

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
    imageLink:{
        height:250,
        width:300,
        marginLeft:30
    },
    navigator:{
        backgroundColor: "darkblue",
        color: "white",
        paddingVertical: 8,
        fontSize:20,
        fontWeight:"bold",
        borderRadius: 15,
        marginTop: 35,
        width:250,
        textAlign:'center'
       }
    
    
})

export default explore;

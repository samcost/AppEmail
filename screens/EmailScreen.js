import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {FontAwesome5} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function EmailScreen({route}) {

    const {id} = route.params;

    const [email, setEmail]=useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/'+ id);
            const email = await response.json();
            setEmail(email);
            /*console.log(email);*/
        }
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.tittleContainer}>
                <Text style={styles.tittle}>{email.tittle}</Text>
                <FontAwesome5 style={email.star ? styles.starFav : styles.star} name="mailchimp" size={25}/>
            </View>
            <View style={styles.infoContainer}>
                <Image style={email.star? styles.imageFav : styles.image} source={{uri: email.picture}}/>
                <View style={styles.info}>
                    <Text style={styles.tittle}>From: {email.from}</Text>
                    <Text style={styles.to}>To: {email.to}</Text>
                </View>
                <View>
                    <Text style={styles.tittle}>{email.time}</Text>
                </View>
            </View>
            <WebView style={{backgroundColor: 'white'}} source={{ html:email.body}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    tittleContainer: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#F2F2F2',
        padding:10,
        marginStart:15,
        marginEnd:15,
    },
    tittle: {
        fontWeight: 'bold',
        color:'#0554F2',
    },
    infoContainer: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        padding:10,
      },
    info:{
        justifyContent: 'center',
      padding:8,
      width: 190,
    },
    to:{
        color:'black',
        fontWeight: 'bold',
        marginStart:15,
        marginTop:5,
        color:'#808080',
    },
    star:{
        color:'#808080',
        alignSelf: 'center',
    },
    starFav:{
        color:'#F29F05',
        alignSelf: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    imageFav: {
      width: 70,
      height: 70,
      borderRadius: 35,
      borderColor: '#F29F05',
      borderWidth: 3,
  },
});
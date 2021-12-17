import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
            <FontAwesome5 style={styles.icones} name="mailchimp" size={40}/>
            <Text style={styles.text}>Your email box</Text>
            <View style={styles.icones}>
                <FontAwesome5 style={styles.icones} name="bars" size={25}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header:{
      flexDirection: 'row',
      height: 55,
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: '#e6e6e6',
      borderRadius:20,
      margin:10,
    },
    icones:{
      flexDirection: 'row',
      color:'black',
      marginRight: 10,
      marginLeft:10,
      alignSelf: 'center',
    },
    text:{
        fontWeight: 'bold',
    },
  });
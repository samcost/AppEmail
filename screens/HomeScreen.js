import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import Constants from 'expo-constants';

import Header from '../components/Header';

export default function HomeScreen({navigation}) {
  
  const [emailslist, setEmailslist]=useState([]);

    useEffect(() => {
      async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
        const emailslist = await response.json();
        setEmailslist(emailslist);
      }
      getData();
    }, []);

    function renderItem({item}) {
        return (
          <TouchableOpacity style={styles.email} onPress={() => navigation.navigate('EmailScreen',{id: item.id})}>
            <Image style={item.star? styles.imageFav : styles.image} source={{uri: item.picture}}/>
            <View style={styles.textBox}>
                <Text style={styles.to}>{item.to}</Text>
                <Text style={styles.nome}>{item.tittle}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.time}>{item.time }</Text>
              <FontAwesome5 style={item.star ? styles.starFav : styles.star} name="mailchimp" size={25}/>
            </View>
          </TouchableOpacity>
        );
    }
  
  return (
    <View style={styles.container}>
            <StatusBar style="auto"/>
            <Header/>
            <FlatList
                data={emailslist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#F2F2F2',
  },
  email:  {
    height: 90,
    flexDirection: 'row',
    padding:10,
    backgroundColor: '#e6e6e6',
    borderRadius:20,
    margin:8,
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
  textBox: {
    justifyContent: 'center',
    padding:8,
    width: 190,
  },
  to: {
    fontWeight: 'bold',
    color:'#0554F2',
  },
  nome:{
    color:'#808080',
    fontSize: 12,
    marginStart:15,
    marginTop:5,
  },
  info:{
    marginLeft:20,
  },
  time: {
    alignSelf: 'center',
    paddingTop:5,
  },
  star:{
    color:'#808080',
    alignSelf: 'center',
    paddingTop:10,
  },
  starFav:{
    color:'#F29F05',
    alignSelf: 'center',
    paddingTop:10,
},
});
"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native"

export default class Bankitem extends React.Component {
    render() {
        const { index, item } = this.props;
        return(
        <View style = {[styles.container, index === 0 ? { marginTop: 10 } : '']}>
            <Image style = {styles.image} source = {require('../img/Bank-icon.png')} />
            <Text style = {styles.text}>{item.name}</Text>
        </View>
        );
    }    
}

const styles = StyleSheet.create({

    container: {
       backgroundColor: 'white',
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
       height: 60,
   },

   image: {
       marginLeft: 15,
   },

   text: {
       left: 61,
       position: 'absolute',
       fontSize: 15,
       color: '#000',
   }
   
});
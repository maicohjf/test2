"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import FlatListDemo from './investorlist/InvestorListComponent'

class InvestorHomeComponent extends React.Component {
  render() {
    const { height } = Dimensions.get('window');
    return (
      <View style = {{flex: 1}}>
        <View style = {{backgroundColor: 'white', height: 44, flexDirection: 'row'}}>
          <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
              <Text>默认 </Text>
              <Image source = {require('./img/Triangle-2-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text>按利率 </Text>
              <Image source = {require('./img/Triangle-4-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text>按期限 </Text>
              <Image source = {require('./img/Triangle-4-icon.png')}/>
            </TouchableOpacity>
        </View>
        <FlatListDemo/>
      </View>
    );
  }
}

InvestorHomeComponent.navigationOptions = {
  title: '我要投资',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    logo: {
      alignItems: "center",
      overflow: "hidden",
      width: 100,
      height: 50,
      marginTop: 59,
    },
  });
  
/* exports ================================================================== */
module.exports = InvestorHomeComponent;
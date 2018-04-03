"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TextInput } from "react-native";
import { Picker, List, WhiteSpace, InputItem, Button, Checkbox, Flex } from 'antd-mobile';



class buyBorrowerComponent extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.item}>
          <View>
            <Image
              style={styles.icon}
              source={require('./img/touxiang.png')}
            >
            </Image>
            <View style={styles.realname}>
              <Text style={styles.realnametext}>已实名</Text>
            </View>
          </View>
          
          <View style={styles.itemCenter}>
            <Text style={styles.name}>洪先生</Text>
            <Text style={styles.nameinfo}>他是您的潜在投资人</Text>
          </View>
          <View style={styles.seeInfo}>
            <Text style={styles.seeInfotext}>查看资料</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Image
              style={styles.icon}
              source={require('./img/touxiang.png')}
            >
            </Image>
            <View style={styles.realname}>
              <Text style={styles.realnametext}>已实名</Text>
            </View>
          </View>
          
          <View style={styles.itemCenter}>
            <Text style={styles.name}>洪先生</Text>
            <Text style={styles.nametime}>最近投资时间：02-09</Text>
          </View>
          <View style={styles.seeInfo}>
            <Text style={styles.seeInfotext}>查看资料</Text>
          </View>
        </View>


        <View style={styles.item}>
          <View>
            <Image
              style={styles.icon}
              source={require('./img/touxiang.png')}
            >
            </Image>
            <View style={styles.realnameclo}>
              <Text style={styles.realnametextclo}>已实名</Text>
            </View>
          </View>
          
          <View style={styles.itemCenter}>
            <Text style={styles.name}>洪先生</Text>
            <Text style={styles.nametime}>最近投资时间：02-09</Text>
          </View>
          <View style={styles.seeInfoclo}>
            <Text style={styles.seeInfotextclo}>已关闭</Text>
          </View>
        </View>

        <View style={styles.nomore}>
          <Text style={styles.nomoretext}>没有更多了</Text>
        </View>
      </View>  
    );
  }
}

buyBorrowerComponent.navigationOptions = {
  title: '借款人-我的购买',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    item: {
      marginTop: 10,
      height: 80,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center', 
      paddingLeft: 15,
      paddingRight: 15,
    },
    icon: {
      marginLeft: 5,
      width: 56,
      height: 56,
    },
    itemCenter: {
      width: 185,
      marginLeft: 22,
    },
    name: {
      color: '#000',
      fontSize: 15,
      marginBottom: 16,
    },
    nameinfo: {
      fontSize:13, 
      color: '#388BED',
    },
    nametime:{
      fontSize:13, 
      color: '#CCC',
    },
    seeInfo: {
      width: 80,
      height: 30,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#2493FF',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    seeInfotext: {
      color: '#2493FF',
      fontSize: 15,
    },
    seeInfoclo: {
      width: 60,
      height: 25,
      // borderWidth: 1,
      borderRadius: 50,
      // borderColor: '#2493FF',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#DADADA',
      marginLeft: 10,
    },
    seeInfotextclo: {
      color: 'white',
      fontSize: 13,
    },
    realname: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#FFF1DB',
      width: 33,
      height: 13,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#FF935C',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    realnametext: {
      fontSize: 9,
      color: '#FF935C',
    },
    realnameclo: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#F4F7F9',
      width: 33,
      height: 13,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#ccc',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    realnametextclo: {
      fontSize: 9,
      color: '#ccc',
    },
    nomore: {
      marginTop: 15,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    nomoretext: {
      fontSize: 13,
      color: '#CCCCCC'
    }
});
  
/* exports ================================================================== */
module.exports = buyBorrowerComponent;
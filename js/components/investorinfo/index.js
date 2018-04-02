"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TextInput } from "react-native";
import { Picker, List, WhiteSpace, InputItem, Button, Checkbox, Flex } from 'antd-mobile';



class investorinfoComponent extends React.Component {
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
            <Text style={styles.name}>175 8888 5066</Text>
            <Text style={styles.nametime}>快联系投资人吧！</Text>
          </View>
        </View>
        <View style={styles.moneyinfo}>
          
        </View>
      </View>  
    );
  }
}

investorinfoComponent.navigationOptions = {
  title: '投资人信息',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  item: {
    height: 74,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center', 
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    marginLeft: 5,
    width: 70,
    height: 70,
  },
  itemCenter: {
    width: 185,
    marginLeft: 5,
  },
  name: {
    color: '#000',
    fontSize: 15,
    marginBottom: 6,
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
});
  
/* exports ================================================================== */
module.exports = investorinfoComponent;
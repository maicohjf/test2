"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, Picker, TextInput } from "react-native";
import { PickerComponent } from "./picker";
class optionComponent extends React.Component {
  render() {
    console.log('wwwww', PickerComponent)
    return (
      <View>
        <PickerComponent></PickerComponent>
        {/* <View style={styles.top}>
          <Image
            style={styles.icon}
            source={require('./img/icon.png')}
          ></Image>
          <Text style={styles.text}>选填更多，提高借款额度，成功率，加快借款速度！</Text>
        </View>
        <View>
          <View style={styles.listitem}>
            <Text style={styles.label}>月均总收入（元）</Text>
            <TextInput
              placeholder="1000-10万"
            />
          </View>
          <View style={styles.listitem}>
            <Text style={styles.label}>是否有公积金社保</Text>
          </View>
        </View> */}
      </View>  
    );
  }
}

optionComponent.navigationOptions = {
  title: '选填认证',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    top: {
      height: 44,
      // backgroundColor:'red', 
      // alignItems:'center',  
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',

    },
    icon: {
      width: 14,
      height: 14,
      marginLeft: 15,
    },
    text: {
      marginLeft: 20,
      fontSize: 13,
      color: '#999',
      marginLeft: 5,
    },
    listitem: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#e5e5e5" 
    },
    label: {
      fontSize: 15,
      color: '#666'
    }
  });
  
/* exports ================================================================== */
module.exports = optionComponent;
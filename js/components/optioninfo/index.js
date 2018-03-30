"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TextInput } from "react-native";
// import { PickerComponent } from "./picker";
import { Picker, List, WhiteSpace, InputItem, Button, Checkbox, Flex } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
let IndexStyle = require('antd-mobile/lib/picker/style/index.native.js');
import PickerStyle from 'antd-mobile/lib/picker/style/index.native';
import InputItemStyle from 'antd-mobile/lib/input-item/style/index.native';
const AgreeItem = Checkbox.AgreeItem;
// alert(JSON.stringify(InputItemStyle.input.fontSize))
// IndexStyle.headerItem.height = '10';
// var newStyle2 = {
//   ...InputItemStyle,
//   input: {
//     ...InputItemStyle.input,
//     fontSize: 30,
//     // height: 20,
//   }
// }

// var newStyle1 = {
//   ...PickerStyle,
//   title: {
//     ...PickerStyle.title,
//     color: '#fff',
//   }
// }

// alert(JSON.stringify(newStyle1))

class optionComponent extends React.Component {
  render() {
    return (
      <View>
        {/* <Picker data={district} cols={1}>
          <List.Item arrow="horizontal">Single</List.Item>
        </Picker> */}
        {/* <InputItem
            type='money'
            placeholder="start from right"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
            // styles={newStyle2} 
        >光标在右</InputItem> */}
        <View style={styles.top}>
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
          <Picker data={district} cols={1}>
            <List.Item arrow="horizontal">是否有公积金社保</List.Item>
          </Picker>
          <Picker data={district} cols={1}>
            <List.Item arrow="horizontal">是否有信用卡</List.Item>
          </Picker>
          <Picker data={district} cols={1}>
            <List.Item arrow="horizontal">名下房产情况</List.Item>
          </Picker>
          <Picker data={district} cols={1}>
            <List.Item arrow="horizontal">名下车产情况</List.Item>
          </Picker>
          <View style={styles.surebtn}>
            <Button type="primary" disabled>确认</Button>
          </View>
          <View style={styles.agree}>
            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
              我阅读并且同意 《***协议》
            </AgreeItem>
          </View>
          {/* <View style={styles.agree}>
              <Text>www</Text>
          </View> */}

        </View>
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
    },
    surebtn: {
      paddingLeft: 27.5,
      paddingRight: 27.5,
      marginTop: 40,
    },
    agree: {
      // backgroundColor: 'red',
      marginTop: 10,
      // textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  
/* exports ================================================================== */
module.exports = optionComponent;
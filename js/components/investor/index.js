"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu, ActivityIndicator, NavBar, Toast } from 'antd-mobile';
import InvestorListComponent from './investorlist/InvestorListComponent'
import FadeInView from './popover/popover'
import Carousel from 'react-native-snap-carousel';


class InvestorHomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstDefaultType: 0,
      firstDefaultText: '默认',
      bShowPopoverView: false,
      secondRateType: 0,
      thirdTermType: 0,
    }
  }



  render() {
    const { height } = Dimensions.get('window');
    return (


    //   // <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
    //   {/* <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text> */}
    // // </FadeInView>



      <View style = {{flex: 1}}>
        <View style = {{backgroundColor: 'white', height: 44, flexDirection: 'row'}}>
          <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress = {() => {
              this.setState({bShowPopoverView: !this.state.bShowPopoverView});
          }} >
              <Text>{this.state.firstDefaultText} </Text>
              <Image source = {require('./img/Triangle-2-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress = {() => {
              Toast.show("用户点击了第二个按利率按钮");
            }}>
              <Text>按利率 </Text>
              <Image source = {require('./img/Triangle-4-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress = {() => {
              Toast.show("用户点击了第三个按期限按钮");
            }}>
              <Text>按期限 </Text>
              <Image source = {require('./img/Triangle-4-icon.png')}/>
            </TouchableOpacity>
        </View>
        <InvestorListComponent/>
        {
          this.state.bShowPopoverView ? (<FadeInView/>) : (null)
        }
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
export default InvestorHomeComponent;
"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class InvestorHomeComponent extends React.Component {
  render() {
    return (
      <View>
          <Text>home</Text>
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
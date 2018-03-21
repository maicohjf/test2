"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class ProfileComponent extends React.Component {
  render() {
    return (
      <View>
          <Text>个人中心</Text>
      </View>
    );
  }
}

ProfileComponent.navigationOptions = {
  title: 'Profile Screen',
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
module.exports = ProfileComponent;
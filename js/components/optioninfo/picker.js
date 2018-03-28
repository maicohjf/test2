"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, Picker, TextInput } from "react-native";

class PickerComponent extends React.Component {
  render() {
    return (
      <View style={styles.back}>
        <Text>我是模态框</Text>
      </View>  
    );
  }
}


/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#000',
    opacity: 0.5,
    zIndex: 9999,
    position: 'relative',
  }
});
  
/* exports ================================================================== */
// module.exports = PickerComponent;
export { PickerComponent };
// export default PickerComponent;
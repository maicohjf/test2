"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, PixelRatio} from "react-native";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import ContractListItem from './listItem';

const items = [1, 2, 3];
export default class ContractListComponent extends Component {
  render() {
    return (
      <View style={styles.contractListContainer}>
        <ContractListItem key={shortid.generate()} />
        <View>111111</View>
        {
          items.map(item => (<ContractListItem key={shortid.generate()} />))
        }
      </View>
    );
  }
}


/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  contractListContainer: {
    margin: 10,
  }
});

/* exports ================================================================== */
module.exports = ContractListComponent;
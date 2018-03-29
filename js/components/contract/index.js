"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, PixelRatio} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';

import ContractList from '../contract/list';

export default class ContractComponent extends Component {
  render() {
    return (
      <ScrollableTabView
          tabBarPosition="top"
      >
        <ContractList tabLabel="待签署" navigation={this.props.navigation} />
        <ContractList tabLabel="已签署" navigation={this.props.navigation} />
      </ScrollableTabView>
    );
  }
}

ContractComponent.navigationOptions = {
  title: '我的合同',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({});

/* exports ================================================================== */
module.exports = ContractComponent;
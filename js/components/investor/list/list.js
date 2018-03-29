/**
 * 选取投资人列表
 * Created by liyanxi on 3/26/18.
 */
"use strict";

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import InvestorItem from './listitem'

export default class investListComponent extends React.Component {

  handleToInvestorDetail() {
    this.props.navigation.navigate("InvestorDetail")
  }

  render() {
    return (
        <View style={styles.investListContainer}>
          <InvestorItem index={0} onDetail={() => this.handleToInvestorDetail()}/>
          <InvestorItem index={1} onDetail={() => this.handleToInvestorDetail()}/>
          <InvestorItem index={2} onDetail={() => this.handleToInvestorDetail()}/>
        </View>
    );
  }
}


investListComponent.navigationOptions = {
  title: '选取投资人列表',
};

const styles = StyleSheet.create({
  investListContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    flexDirection: 'column',
  },
});
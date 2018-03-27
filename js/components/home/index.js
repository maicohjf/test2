"use strict";

import React from "react";
import {Dimensions, View, Image, Text, StyleSheet} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tab'

import Borrower from '../borrower';
import Investor from '../investor';
import Profile from '../profile';
import Contract from '../contract'

class HomeComponent extends React.Component {

  render() {
    return (
        <ScrollableTabView
            tabBarPosition="bottom"
            renderTabBar={() => <TabBar />}
        >
          <Borrower tabLabel="我要借款"/>
          <Investor tabLabel="我要投资"/>
          <Contract tabLabel="个人中心"/>
        </ScrollableTabView>
    );
  }
}

HomeComponent.navigationOptions = {
  title: '首页',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({});

/* exports ================================================================== */
module.exports = HomeComponent;
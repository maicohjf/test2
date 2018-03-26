"use strict";

import React from "react";
import {Dimensions, View, Image, Text, StyleSheet} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tab'

import Borrower from '../borrower';
import Investor from '../investor';
import Profile from '../profile';
import Message from '../message';

class HomeComponent extends React.Component {

  render() {
    return (
        <ScrollableTabView
            tabBarPosition="bottom"
            renderTabBar={() => <TabBar />}
        >
          <Borrower tabLabel="我要借款" tabIcon=""/>
          <Investor tabLabel="我要投资"/>
          <Message tabLabel="我的消息"/>
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
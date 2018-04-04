"use strict";

import React from "react";
import {connect} from 'react-redux'
import {Dimensions, View, Image, Text, StyleSheet, BackHandler, Platform} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tab'

import Borrower from '../borrower';
import Investor from '../investor';
import Profile from '../profile';
import Message from '../message';

class HomeComponent extends React.Component {

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => this.onBackAndroid());
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', () => this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    const nav = this.props.navigation;
    const routers = this.props.nav.routes;
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };

  render() {
    return (
        <ScrollableTabView
            locked={true}
            scrollWithoutAnimation={true}
            tabBarPosition="bottom"
            renderTabBar={() => <TabBar />}
        >
          <Borrower tabLabel="我要借款" navigation={this.props.navigation}/>
          <Investor tabLabel="我要投资"/>
          <Profile tabLabel="个人中心" navigation={this.props.navigation}/>
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

const mapStateToProps = state => ({
  nav: state.nav,
});
export default connect(mapStateToProps)(HomeComponent);
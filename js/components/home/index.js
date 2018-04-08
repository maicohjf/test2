"use strict";

import React from "react";
import {connect} from 'react-redux'
import {StyleSheet, BackHandler, Platform} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './tab'

import Borrower from '../borrower';
import Investor from '../investor';
import Profile from '../profile';

class HomeComponent extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params ? navigation.state.params.title : '我要借款'
    }
  };
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

  _onSelectListener = ({i}) => {
    if (i === 0) {
      this.props.navigation.setParams({title: '我要借款'})
    } else if (i === 1) {
      this.props.navigation.setParams({title: '我要投资'})
    } else if (i === 2) {
      this.props.navigation.setParams({title: '个人中心'})
    }
  };

  render() {
    console.log(this.props.navigation);
    console.log(this.props);
    return (
        <ScrollableTabView
            locked={true}
            scrollWithoutAnimation={true}
            tabBarPosition="bottom"
            onChangeTab={this._onSelectListener}
            initialPage={0}
            renderTabBar={() => <TabBar />}
        >
          <Borrower tabLabel="我要借款" navigation={this.props.navigation}/>
          <Investor tabLabel="我要投资"/>
          <Profile tabLabel="个人中心" navigation={this.props.navigation}/>
        </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  nav: state.nav,
});
export default connect(mapStateToProps)(HomeComponent);
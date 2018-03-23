/**
 * Created by liyanxi on 3/23/18.
 */

"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, PixelRatio} from "react-native"
import PropTypes from 'prop-types';

export default class TabBar extends Component {

  static propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合
  };

  renderTab(name, page, isTabActive, onPressHandler) {
    return (
        <TouchableOpacity onPress={() => onPressHandler(page)} style={styles.tabInnerContainer} key={page}>
          <View style={styles.tab}>
            <Image source={isTabActive ? icons[page].selected : icons[page].normal}
                   style={isTabActive ? styles.tabIconSelected : styles.tabIcon}/>
            {!isTabActive && <Text style={styles.tabText}>{name}</Text>}
          </View>
        </TouchableOpacity>
    )
  }

  render() {
    return (
        <View style={styles.tabs}>
          <View style={styles.dividerLine}/>
          {this.props.tabs.map((tab, i) => {
            console.log(tab);
            const isTabActive = this.props.activeTab === i;
            return this.renderTab(tab, i, isTabActive, this.props.goToPage)
          })}
        </View>
    )
  }
}

//本地icon list
const icons = [
  {selected: require('../img/tab-woyaojiekuan-s.png'), normal: require('../img/tab-woyaojiekuan.png')},
  {selected: require('../img/tab-woyaotouzi-s.png'), normal: require('../img/tab-woyaotouzi.png')},
  {selected: require('../img/tab-gerenzhongxin-s.png'), normal: require('../img/tab-gerenzhongxin.png')},
];

const styles = StyleSheet.create({
  tabs: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  tabInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  tabIconSelected: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  tabText: {
    marginTop: 5,
    fontSize: 10,
    color: '#CCCCCC',
    lineHeight: 15
  },
  dividerLine: {
    backgroundColor: '#000000',
    opacity: 0.1,
    height: 1 / PixelRatio.get(),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
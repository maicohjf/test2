/**
 * 城市选择列表
 * Created by liyanxi on 4/2/18.
 */

"use strict";

import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';
import CitySectionList from './CitySectionList';
import CityItem from './CityItem';
import PropTypes from 'prop-types'
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

const ITEM_HEIGHT = 44; //item的高度
const HEADER_HEIGHT = 44;  //分组头部的高度
const SEPARATOR_HEIGHT = 10;  //分割线的高度

export default class CitySelector extends React.Component {
  static propTypes = {
    curCityId: PropTypes.string,
    onPressItem: PropTypes.func,
    sections: PropTypes.array,
    cities: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) => ITEM_HEIGHT,
      // These four properties are optional
      getSeparatorHeight: () => SEPARATOR_HEIGHT, // The height of your separators
      getSectionHeaderHeight: () => HEADER_HEIGHT, // The height of your section headers
    });
  }

  _keyExtractor = (item, index) => index + "";

  _renderItem = ({item, index}) => {
    return (
        <CityItem
            id={`${item.id}`}
            cityName={item.name}
            onPressItem={this.props.onPressItem}
            selected={this.props.curCityId === `${item.id}`}
        />
    );
  };

  _renderSectionHeader = ({section}) => {
    return (
        <Text style={styles.sectionHeader}>{section.title}</Text>
    );
  };

  _renderSeparator = () => {
    return (
        <View style={{height: SEPARATOR_HEIGHT, flex: 1}}/>
    );
  };

  _onSectionSelect = (section, index) => {
    //跳转到某一项
    if (section === '当前') {
      return
    }
    if (index > this.props.cities.length - 1) {
      index = this.props.cities.length - 1
    }
    this.list.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: index,
      viewPosition: 0,
      viewOffset: ITEM_HEIGHT
    });
  };

  _onSectionUp = () => {
    // 手指抬起
  };

  getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
    index,
  });

  render() {
    return (
        <View style={{flex: 1}}>
          <SectionList
              ref={ref => (this.list = ref)}
              renderItem={this._renderItem}
              renderSectionHeader={this._renderSectionHeader}
              sections={this.props.cities}
              ItemSeparatorComponent={this._renderSeparator}
              keyExtractor={this._keyExtractor}
              showsVerticalScrollIndicator={false}
              getItemLayout={this.getItemLayout}
              extraData={this.props}
          />
          <CitySectionList
              onSectionSelect={this._onSectionSelect}
              sections={this.props.sections}
              onSectionUp={this._onSectionUp}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    lineHeight: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: '#F4F7F9'
  },
});


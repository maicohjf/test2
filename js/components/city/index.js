/**
 * 城市选择列表
 * Created by liyanxi on 4/2/18.
 */

"use strict";

import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';
import CitySectionList from './CitySectionList';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

const ITEM_HEIGHT = 44; //item的高度
const HEADER_HEIGHT = 44;  //分组头部的高度
const SEPARATOR_HEIGHT = 10;  //分割线的高度

export default class CitySelector extends React.Component {
  static defaultProps = {
    cities: [
      {data: [{name: '阿坝'}, {name: '阿不'}, {name: '阿不'}, {name: '阿不'}], title: 'A'},
      {data: [{name: '埠坝'}, {name: '不论不'}, {name: '不论不'}, {name: '不论不'}], title: 'B'},
      {data: [{name: '三亚坝'}, {name: '三瓶'}, {name: '三瓶'}, {name: '三瓶'}], title: 'C'},
      {data: [{name: '迪拜'}, {name: '抵押'}, {name: '抵押'}, {name: '抵押'}], title: 'D'},
    ],
    sections: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#']
  };

  constructor(props) {
    super(props);
    this.getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) => ITEM_HEIGHT,
      // These four properties are optional
      getSeparatorHeight: () => SEPARATOR_HEIGHT, // The height of your separators
      getSectionHeaderHeight: () => HEADER_HEIGHT, // The height of your section headers
    })
  }

  _keyExtractor = (item, index) => index + "";

  _renderItem = (item, index) => {
    return (
        <Text style={styles.itemStyle}>{item.item.name}</Text>
    );
  };

  _renderSectionHeader = (section) => {
    return (
        <Text style={styles.sectionHeader}>{section.section.title}</Text>
    );
  };

  _renderSeparator = () => {
    return (
        <View style={{height: SEPARATOR_HEIGHT, flex: 1}}/>
    );
  };

  _onSectionSelect = (section, index) => {
    //跳转到某一项
    if (index > this.props.cities.length - 1) {
      index = this.props.cities.length - 1
    }
    this.list.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: index,
      viewPosition: 0,
      viewOffset: ITEM_HEIGHT,
    })
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
          <Text style={styles.curName}>当前</Text>
          <Text style={styles.curCity}>上海</Text>
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
            />
            <CitySectionList
                onSectionSelect={this._onSectionSelect}
                sections={this.props.sections}
                onSectionUp={this._onSectionUp}
            />
          </View>
        </View>
    );
  }
}

CitySelector.navigationOptions = {
  title: '城市选择器',
};

const styles = StyleSheet.create({
  sectionHeader: {
    lineHeight: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: '#F4F7F9'
  },
  itemStyle: {
    lineHeight: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    paddingLeft: 15,
    backgroundColor: 'white',
    flex: 1
  },
  curName: {
    lineHeight: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    paddingLeft: 15,
  },
  curCity: {
    lineHeight: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    paddingLeft: 15,
    backgroundColor:'white'
  }
});


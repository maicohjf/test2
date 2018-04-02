/**
 * 城市选择列表
 * Created by liyanxi on 4/2/18.
 */

"use strict";

import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';

const ITEM_HEIGHT = 50; //item的高度
const HEADER_HEIGHT = 44;  //分组头部的高度
const SEPARATOR_HEIGHT = 10;  //分割线的高度

export default class CitySelector extends React.Component {
  static defaultProps = {
    cities: [
      {data: [{name: '阿坝'}, {name: '阿不'}], title: 'A'},
      {data: [{name: '埠坝'}, {name: '不论不'}], title: 'B'},
      {data: [{name: '三亚坝'}, {name: '三瓶'}], title: 'C'},
      {data: [{name: '迪拜'}, {name: '抵押'}], title: 'D'},
    ]
  };
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

  _renderItemLayout(data, index) {
    let [length, separator, header] = [ITEM_HEIGHT, SEPARATOR_HEIGHT, HEADER_HEIGHT];
    return {length, offset: (length + separator) * index + header, index};
  }

  render() {
    return (
        <View>
          <SectionList
              renderItem={this._renderItem}
              renderSectionHeader={this._renderSectionHeader}
              sections={this.props.cities}
              ItemSeparatorComponent={this._renderSeparator}
              keyExtractor={this._keyExtractor}
              showsVerticalScrollIndicator={false}
              getItemLayout={this._renderItemLayout}
          />
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
  }
});


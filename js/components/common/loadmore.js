/**
 * 上拉加载更多
 * Created by liyanxi on 3/30/18.
 */

"use strict";

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ActivityIndicator} from 'antd-mobile'

export default class LoadMore extends React.Component {
  static defaultProps = {
    noMoreText: '没有更多了',
    loadingText: '加载中...'
  };

  render() {
    console.log(this.props.loading);
    return (
        <View style={styles.loadMore}>
          {this.props.loading ? <ActivityIndicator text={this.props.loadingText}/> :
              <Text style={styles.textStyle}>{this.props.noMoreText}</Text>}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  loadMore: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 13,
    color: '#CCC'
  }
});



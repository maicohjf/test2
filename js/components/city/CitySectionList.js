/**
 * 城市列表检索指示器
 * Created by liyanxi on 4/2/18.
 */

"use strict";
import React, {PureComponent, PropTypes} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const returnTrue = () => true;

export  default class CitySectionList extends React.PureComponent {

  static propTypes = {
    //这边是需要显示的数据信息
    sections: PropTypes.array,
    //点击拖动选择时候的回调
    onSectionSelect: PropTypes.func,
    //手指抬起的时候的回调
    onSectionUp: PropTypes.func
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <View
            pointerEvents='box-none'
            style={styles.topView}>
          <View
              style={styles.container}
              ref="view"
              onStartShouldSetResponder={returnTrue}
              onMoveShouldSetResponder={returnTrue}
              onResponderGrant={this.detectAndScrollToSection}
              onResponderMove={this.detectAndScrollToSection}>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0
  },
});
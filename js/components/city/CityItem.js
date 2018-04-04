/**
 * Created by liyanxi on 4/3/18.
 */

'use strict';

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class CityItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    cityName: PropTypes.string,
    onPressItem: PropTypes.func,
    selected: PropTypes.bool
  };
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const {selected, cityName} = this.props;
    return (
        <TouchableOpacity activeOpacity={1}
                          style={[styles.itemStyle, selected ? styles.itemSelected : '']}
                          onPress={this._onPress}>
          <Text style={styles.textStyle}>{cityName}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 44,
    paddingLeft: 15,
    backgroundColor: 'white',
    flex: 1
  },
  itemSelected: {
    backgroundColor: 'gray'
  },
  textStyle: {
    lineHeight: 44,
    fontSize: 15,
    color: '#000'
  }
});
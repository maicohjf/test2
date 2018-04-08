/**
 * Created by liyanxi on 4/3/18.
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class CityItem extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    cityName: PropTypes.string,
    onPressItem: PropTypes.func,
    selected: PropTypes.bool
  };
  _onPress = () => {
    if (this.props.selected) {
      return
    }
    this.props.onPressItem(this.props.id, this.props.cityName);
  };

  render() {
    const {selected, cityName} = this.props;
    return (
        <TouchableOpacity activeOpacity={0.2}
                          style={styles.itemStyle}
                          onPress={this._onPress}>
          <Text style={styles.textStyle}>{cityName}</Text>
          {selected ? <Image source={require('./img/ds-icon.png')} style={styles.selectedIcon}/> : null}
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 44,
    paddingLeft: 15,
    paddingRight: 40,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemSelected: {
    backgroundColor: 'gray'
  },
  textStyle: {
    lineHeight: 44,
    height: 44,
    fontSize: 15,
    color: '#000'
  },
  selectedIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
});
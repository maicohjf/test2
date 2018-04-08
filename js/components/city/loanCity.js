/**
 * 贷款城市选择
 * Created by liyanxi on 4/4/18.
 */

"use strict";
import React, {Component}  from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SingleCitySelector from './SingleCitySelector';
import DB from '../../utils/db';

export default class LoanCityComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      curCity: '请选择',
      cities: [],
      sections: []
    }
  }

  componentWillMount() {
    DB.readCities(({cities, sections}) => {
      this.setState({
        cities: cities,
        sections: sections
      });
    });
  }

  _onPressCityItem = (id, curCity) => {
    this.setState({
      id: id,
      curCity: curCity
    });
  };

  render() {
    return (
        <View style={{flex: 1}}>
          <Text style={styles.curName}>当前</Text>
          <View style={styles.itemStyle}>
            <Text style={styles.textStyle}>{this.state.curCity}</Text>
            {this.state.id ? <Image source={require('./img/ds-icon.png')} style={styles.selectedIcon}/> : null}
          </View>
          <SingleCitySelector curCityId={this.state.id} cities={this.state.cities}
                              sections={this.state.sections} onPressItem={this._onPressCityItem}/>
        </View>
    );
  }
}
LoanCityComponent.navigationOptions = {
  title: '贷款城市'
};
const styles = StyleSheet.create({
  itemStyle: {
    height: 50,
    paddingLeft: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 40,
  },
  curName: {
    lineHeight: 44,
    height: 50,
    paddingLeft: 15,
  },
  selectedIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
});


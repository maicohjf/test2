/**
 * Created by liyanxi on 3/29/18.
 */
"use strict";

import React, {PureComponent} from 'react';
import {View, Image, Text, StyleSheet, PixelRatio} from 'react-native';
import {Button} from 'antd-mobile';
import LinearGradient from 'react-native-linear-gradient';

export default class investListComponent extends React.PureComponent {

  render() {
    const {index, item} = this.props;
    return (
        <LinearGradient colors={[colors.startColor, index === 0 ? colors.endColor : colors.startColor]}
                        startPoint={{x: 1, y: 0}}
                        endPoint={{x: 0, y: 1}}
                        style={[styles.investItem, index === 0 ? {marginTop: 10} : '']}>
          <View style={styles.investLeft}>
            <Image source={require('../img/default_avatar.png')} style={styles.avatarIcon}/>
            <Image source={require('../img/icon_real_name.png')} style={styles.realNameIcon}/>
          </View>
          <View style={styles.investMiddle}>
            <Text style={styles.investor}>{item.name}</Text>
            <Text
                style={[styles.investTime, this.props.index === 0 ? styles.potential : '']}>{this.props.index === 0 ? '他是您的潜在投资人' : '最近投资时间：02-09'}</Text>
          </View>
          <View>
            <Button onClick={() => this.props.onDetail()} style={styles.checkInfo}>
              <Text style={styles.btnText}>查看资料</Text>
            </Button>
          </View>
        </LinearGradient>
    );
  }
}

const colors = {
  startColor: "#FFFFFF",
  endColor: "#F6FAFD"
};
const styles = StyleSheet.create({
  investListContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    flexDirection: 'column',
  },
  investItem: {
    flexDirection: 'row',
    minHeight: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFF',
  },
  investLeft: {
    minHeight: 70,
    minWidth: 70
  },
  investMiddle: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5
  },
  investRight: {},
  avatarIcon: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    borderRadius: 35
  },
  realNameIcon: {
    height: 13,
    width: 33,
    resizeMode: 'contain',
    position: 'absolute',
    top: 2,
    right: 3
  },
  investor: {
    lineHeight: 25,
    color: '#000000',
    fontSize: 15
  },
  potential: {
    color: '#388BED'
  },
  investTime: {
    lineHeight: 25,
    color: '#CCCCCC',
    fontSize: 13
  },
  checkInfo: {
    minWidth: 80,
    height: 30,
    borderRadius: 50,
    borderColor: '#2493FF',
    borderWidth: 1 / PixelRatio.get(),
    backgroundColor: '#FFF',
  },
  btnText: {
    color: '#2493FF',
    fontSize: 15,
    flex: 1,
    textAlign: 'center'
  }
});
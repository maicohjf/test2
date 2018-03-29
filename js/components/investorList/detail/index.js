/**
 * 投资人信息
 * Created by liyanxi on 3/27/18.
 */

"use strict";

import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, PixelRatio, ScrollView} from 'react-native';
import colors from '../../../constants/colors';
import {Button} from 'antd-mobile';

export default class InvestorInfo extends React.Component {
  static defaultProps = {
    investDemand: ["不介意借款人身份", "有社保有公积金", "2年以上营业执照", "无车产也可", "无房产也可"],
    investCity: ["阿克苏", "呼和浩特", "哈尔冰", "深圳", "上海"],
  };

  constructor(props) {
    super(props);
    this.state = {
      curTab: 0,
    }
  }

  get baseInfoView() {
    return (
        <View style={styles.baseInfoContainer}>
          <View style={styles.baseInfoOne}>
            <View style={styles.infoOne}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.infoLeft}>对外称呼</Text>
                <Text style={styles.infoValue}>张先生</Text></View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.infoLeft}>实名认证</Text>
                <Text style={styles.infoValue}>已实名</Text></View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infoLeft}>银行卡</Text>
              <Text style={styles.infoValue}>6222 1*** **** 0000</Text>
            </View>
          </View>
          <View style={[styles.baseInfoOne, styles.baseInfoTwo]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infoLeft}>最近投资时间</Text>
              <Text style={[styles.infoValue, styles.left10]}>2018-01-18</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infoLeft}>近一个月投资金额（万元）</Text>
              <Text style={styles.infoValue}>1000.50</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infoLeft}>近一个月投资笔数（笔）</Text>
              <Text style={styles.infoValue}>100</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.infoLeft}>平均每笔放款（万元）</Text>
              <Text style={styles.infoValue}>0.50</Text>
            </View>
          </View>
        </View>
    );
  }

  createTag(label) {
    return (
        <View style={styles.tagSolidStyle} key={label}><Text style={styles.tagSolidText}>{label}</Text></View>
    );
  }

  get investIntentionView() {
    return (
        <View style={styles.baseInfoContainer}>
          <View style={styles.intentionContainer}>
            <View style={styles.intentFlowContainer}>
              { this.props.investDemand.map((tag, i) => this.createTag(tag))}
            </View>
          </View>
          <View style={[styles.intentionContainer, styles.baseInfoTwo]}>
            <View style={styles.intentFlowContainer}>
              { this.props.investCity.map((tag, i) => this.createTag(tag))}
            </View>
          </View>
        </View>
    );
  }

  handleQuickBuy() {
    Alert.alert("立即抢单")
  }

  render() {
    return (
        <ScrollView contentContainerStyle={{height:600}}>
          <View style={styles.investorInfoContainer}>
            <View style={styles.investorInfoHeader}>
              <View style={styles.investorContactContainer}>
                <View style={styles.investHeaderLeft}>
                  <Image source={require('../img/default_avatar.png')} style={styles.avatarIcon}/>
                  <Image source={require('../img/icon_real_name.png')} style={styles.realNameIcon}/>
                </View>
                <View style={styles.investHeaderMiddle}>
                  <Text style={styles.contactWay}>175 **** 5066</Text>
                  <Text style={styles.contactTip}>抢单后可获取联系方式</Text>
                </View>
              </View>
              <View style={styles.investorLendInfo}>
                <View style={styles.lendInfoItem}>
                  <Text style={styles.lendName}>总出借金额</Text>
                  <View style={styles.flexColumn}>
                    <Text style={styles.lendValue}>30.0</Text>
                    <Text style={{fontSize: 13, color: '#388BED'}}>万元</Text>
                  </View>
                </View>
                <View style={styles.lendInfoItem}>
                  <Text style={styles.lendName}>总出借笔数</Text>
                  <View style={styles.flexColumn}>
                    <Text style={styles.lendCount}>12</Text>
                    <Text style={{fontSize: 13, color: '#000'}}>笔</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.infoTabs}>
              <TouchableOpacity activeOpacity={1} style={styles.infoTab} onPress={() => this.setState({curTab: 0})}>
                <Text style={styles.infoTabText}>基本信息</Text>
                {this.state.curTab === 0 && <View style={styles.selectedLine}/>}
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} style={styles.infoTab} onPress={() => this.setState({curTab: 1})}>
                <Text style={styles.infoTabText}>投资意向</Text>
                {this.state.curTab === 1 && <View style={styles.selectedLine}/>}
              </TouchableOpacity>
              <View style={styles.dividerLine}/>
            </View>
            {this.state.curTab === 0 ? this.baseInfoView : this.investIntentionView}
            <Button style={styles.btnQuick} onClick={() => {
              this.handleQuickBuy();
            }}>
              <Text style={{color: colors.white, fontSize: 15}}>立即抢单</Text>
            </Button>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  investorInfoContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9',
  },
  investorInfoHeader: {
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  investHeaderLeft: {
    minHeight: 70,
    minWidth: 70
  },
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
  investorContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFF',
  },
  investHeaderMiddle: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contactWay: {
    color: "#000",
    fontSize: 15,
  },
  contactTip: {
    fontSize: 15,
    marginTop: 6,
    color: '#999'
  },
  investorLendInfo: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lendInfoItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lendName: {
    color: "#999999",
    lineHeight: 20,
    fontSize: 13
  },
  lendValue: {
    color: '#388BED',
    fontSize: 18,
    lineHeight: 25,
  },
  lendCount: {
    lineHeight: 25,
    color: '#222',
    fontSize: 18,
  },
  flexColumn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoTabs: {
    backgroundColor: 'white',
    height: 44,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  dividerLine: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#000000',
    opacity: 0.1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  infoTab: {
    width: 125
  },
  selectedLine: {
    backgroundColor: '#388BED',
    height: 2,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  infoTabText: {
    color: '#666',
    fontSize: 13,
    lineHeight: 44,
    textAlign: 'center'
  },
  baseInfoContainer: {},
  baseInfoOne: {
    paddingTop: 15,
    paddingLeft: 15,
    backgroundColor: colors.white
  },
  baseInfoTwo: {
    marginTop: 10,
  },
  infoLeft: {
    lineHeight: 34,
    color: colors.black_light,
    fontSize: 13,
    minWidth: 65,
  },
  infoValue: {
    lineHeight: 34,
    color: colors.black_very_light,
    fontSize: 13,
  },
  infoOne: {
    flexDirection: 'row',
  },
  left10: {
    marginLeft: 10
  },
  intentionContainer: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 5,
    backgroundColor: colors.white
  },
  intentFlowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tagStyle: {
    borderRadius: 50,
    borderWidth: 1 / PixelRatio.get(),
    backgroundColor: colors.white,
    minHeight: 30,
    margin: 5,
    justifyContent: 'center',
  },
  tagSolidStyle: {
    borderRadius: 50,
    backgroundColor: '#43A4FF',
    minHeight: 30,
    margin: 5,
    justifyContent: 'center',
  },
  tagSolidText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    color: colors.white,
  },
  tagText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    color: colors.blue_light,
  },
  btnQuick: {
    marginLeft: 27,
    marginRight: 27,
    marginTop: 40,
    backgroundColor: colors.blue_very_light,
    borderRadius: 50,
  }
});
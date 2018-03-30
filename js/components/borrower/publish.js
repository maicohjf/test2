/**
 * 借款信息--录入
 * Created by liyanxi on 3/26/18.
 */
"use strict";

import React, {Component} from "react";
import {View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Alert, PixelRatio} from 'react-native';
import {Button} from 'antd-mobile'

export default class PublishBorrowInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      amount: '',
      deadline: '',
      rate: '',
      isRateFocus: false,
      loanTime: '',
      loanPurpose: '',
      loanCity: '上海市',
      date: new Date()
    }
  }

  handleCompleted() {
    return this.state.amount
  }

  handlePublishBorrowInfo() {
    // alert
    Alert.alert("提示", "为了您的资金安全，第一次借款时，需要进行借款人认证，完成后，即可发布此次借款。", [
      {text: '取消', onPress: () => console.log('Cancel Pressed'), style: {color: '#999999'}},
      {text: '确定', onPress: () => this.props.navigation.navigate("InvestorList")},
    ], {cancelable: false})
  }

  render() {
    return (
        <View style={styles.borrowInfoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>个人身份</Text>
            <TouchableOpacity style={styles.rightContainer} activeOpacity={1} onPress={() => {
              Alert.alert('选择身份')
            }}>
              <TextInput placeholder={'请选择'} editable={false} style={styles.rightText} value={this.state.identity}
                         underlineColorAndroid={'transparent'}/>
              <Image source={require('./img/arrownext_icon.png')} style={styles.rightArrowIcon}/>
            </TouchableOpacity>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>贷款金额（元）</Text>
            <View style={styles.rightContainer}>
              <TextInput placeholder={'1000-20万'} style={styles.rightText} maxLength={6} value={this.state.amount}
                         onChangeText={text => this.setState({amount: text})} keyboardType='numeric'
                         underlineColorAndroid={'transparent'}/>
              {this.state.amount ? <TouchableOpacity activeOpacity={1} onPress={() => this.setState({amount: ''})}>
                <Image source={require('./img/delete.png')} style={styles.rightDeleteIcon}/>
              </TouchableOpacity> : null}
            </View>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>贷款期限（月）</Text>
            <View style={styles.rightContainer}>
              <TextInput placeholder={'1-24个月'} style={styles.rightText} maxLength={2} value={this.state.deadline}
                         onChangeText={text => this.setState({deadline: text})} keyboardType='numeric'
                         underlineColorAndroid={'transparent'}/>
              {this.state.deadline ? <TouchableOpacity activeOpacity={1} onPress={() => this.setState({deadline: ''})}>
                <Image source={require('./img/delete.png')} style={styles.rightDeleteIcon}/>
              </TouchableOpacity> : null}
            </View>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>年化利率</Text>
            <View style={styles.rightContainer}>
              <TextInput placeholder={'10-36'} style={styles.rightText} maxLength={2} value={this.state.rate}
                         onChangeText={text => this.setState({rate: text})} keyboardType='numeric'
                         onBlur={() => this.setState({isRateFocus: false})}
                         onFocus={() => this.setState({isRateFocus: true})}
                         underlineColorAndroid={'transparent'}/>
              <Text style={{color: this.state.rate || this.state.isRateFocus ? '#000' : '#CCC', marginLeft: 2}}>%</Text>
            </View>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>期望放款时间</Text>
            <TouchableOpacity style={styles.rightContainer} activeOpacity={1} onPress={() => {
              Alert.alert('选择放款时间')
            }}>
              <TextInput placeholder={'请选择'} editable={false} style={styles.rightText} value={this.state.loanTime}
                         underlineColorAndroid={'transparent'}/>
              <Image source={require('./img/arrownext_icon.png')} style={styles.rightArrowIcon}/>
            </TouchableOpacity>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>贷款用途</Text>
            <TouchableOpacity style={styles.rightContainer} activeOpacity={1} onPress={() => {
              Alert.alert('选择贷款用途')
            }}>
              <TextInput placeholder={'请选择'} editable={false} style={styles.rightText} value={this.state.loanPurpose}
                         underlineColorAndroid={'transparent'}/>
              <Image source={require('./img/arrownext_icon.png')} style={styles.rightArrowIcon}/>
            </TouchableOpacity>
            <View style={styles.horizontalLine}/>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.leftTextName}>贷款城市</Text>
            <TouchableOpacity style={styles.rightContainer} activeOpacity={1} onPress={() => {
              Alert.alert('选择贷款城市')
            }}>
              <TextInput placeholder={'请选择'} editable={false} style={styles.rightText} value={this.state.loanCity}
                         underlineColorAndroid={'transparent'}/>
              <Image source={require('./img/arrownext_icon.png')} style={styles.rightArrowIcon}/>
            </TouchableOpacity>
            <View style={styles.horizontalLine}/>
          </View>

          <Button disabled={!this.handleCompleted()}
                  style={[styles.btn, !this.handleCompleted() ? styles.btnBlur : '']}
                  onClick={() => {
                    this.handlePublishBorrowInfo()
                  }}><Text style={{fontSize: 16, color: '#fff'}}>发布</Text></Button>
        </View>
    );
  }

}

PublishBorrowInfoComponent.navigationOptions = {
  title: '借款信息',
};


const styles = StyleSheet.create({
  borrowInfoContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9',
  },
  infoRow: {
    minHeight: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
  },
  leftTextName: {
    color: '#666666',
    fontSize: 15,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  rightText: {
    fontSize: 15,
    color: '#000000',
    flex: 1,
    textAlign: 'right',
    padding: 0,
  },
  rightArrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  rightDeleteIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  horizontalLine: {
    backgroundColor: '#000000',
    opacity: 0.1,
    height: 1 / PixelRatio.get(),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 15
  },
  btn: {
    alignItems: "center",
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#049bff',
    borderRadius: 50,
    marginTop: 40,
    marginLeft: 28,
    marginRight: 28,
  },
  btnBlur: {
    backgroundColor: '#DADADA',
  }
});

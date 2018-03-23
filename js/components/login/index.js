"use strict";

import React from "react";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Dimensions, View, Image, StyleSheet, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { login } from '../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' })
  ]
});

class LoginComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      phone: '',
      smsCode: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    console.log(nextProps);
    // if (hasError) {
    //   AlertIOS.alert('提示', authrization.errcode);
    //   nextProps.resetAuthrization();
    // }

    if (auth && auth.isLoggedIn) {
      // this.props.resetAuthrizationResult();
      // authrization = JSON.stringify(authrization);
      // AsyncStorage.setItem('authrization', authrization)
      //   .then(() => {
      //     // Remove all cache except authrization.
      //     this.props.cleanCache({ isLogin: true });
      //     // Back home page.
      //     this.props.navigation.dispatch(resetAction);
      //   });
      this.props.navigation.dispatch(resetAction);
    }
  }

  handleLogin() {
    const { dispatch } = this.props;
    dispatch(login({
      phone: this.state.phone,
      smsCode: this.state.smsCode,
    }));
  }

  handleSPhoneChange(phone) {
    this.setState({
      phone: phone,
    })
  }

  handleSmsCodeChange(smsCode) {
    this.setState({
      smsCode: smsCode,
    })
  }

  render() {
    return (
      <View style={styles.loginContainer}>
          <Image
            source={require("./img/logo.png")}
            style={styles.logo}
          />
          <View style={[styles.phoneRow, styles.loginBorder]}>
            <Image
              source={require("./img/icon-phone.png")}
              style={styles.inputIcon}
            />
            <TextInput
              onChangeText={text => this.handleSPhoneChange(text)}
              style={styles.loginInput}
              placeholder="请输入手机号码"
            />
          </View>
          <View style={styles.smsCodeRow}>
            <View style={[styles.smsCode, styles.loginBorder]}>
              <Image
                source={require("./img/icon-verifying.png")}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.loginInput}
                onChangeText={text => this.handleSmsCodeChange(text)}
                placeholder="请输入验证码"
              />
            </View>
            <TouchableOpacity onPress={() => {
              this.handleLogin();
            }}>
              <View style={styles.smsCodeBtn}>
                <Text style={{fontSize:12, color:'#fff'}}>获取验证码</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
              this.handleLogin();
            }}>
            <View style={styles.btn}>
              <Text style={{fontSize:16, color:'#fff'}}>登录</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.notice}>新用户登录即同意<Text style={styles.noticeStrong}>《钱家用户注册协议》</Text></Text>
      </View>
    );
  }
}

LoginComponent.navigationOptions = {
  title: '短信登录',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginRow: {
    alignSelf: 'stretch',
    flexDirection:"row",
    alignItems: "center",
  },
  loginBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  phoneRow: {
    alignSelf: 'stretch',
    flexDirection:"row",
    alignItems: "center",
  },
  smsCodeRow: {
    width: Dimensions.get('window').width,
    marginBottom: 40,
    flexDirection:"row",
    alignItems: "center",
  },
  smsCode: {
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
  },
  logo: {
    overflow: "hidden",
    width: 100,
    height: 50,
    marginTop: 59,
    marginBottom: 35,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  loginInput: {
    height: 49,
    borderWidth: 0,
    fontSize: 16,
  },
  smsCodeBtn: {
    width: 90,
    height: 30,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  notice: {
    marginTop: 15,
    color: '#999',
    fontSize: 13,
  },
  noticeStrong: {
    color: '#388BED'
  },
  btn: {
    width: 320,
    height: 44,
    backgroundColor: '#049bff',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 50,
  }
});
  
/* exports ================================================================== */
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(LoginComponent);
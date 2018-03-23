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
    let formatedPhone = phone.replace(/\s+/g,'');
    const re = /^1\d{0,10}$/;
    const prePhone = this.state.phone;
    if (formatedPhone == prePhone || !re.test(formatedPhone)) {
      formatedPhone = prePhone;
    };
    // console.log(formatedPhone);
    this.setState({
      phone: formatedPhone,
    });
  }

  handleSmsCodeChange(smsCode) {
    this.setState({
      smsCode: smsCode,
    });
  }

  handleClearPhone() {
    this.setState({
      phone: '',
    });
  }

  handleClearSmsCode() {
    this.setState({
      smsCode: '',
    });
  }

  formatPhone(phone) {
    let value = phone;
    if (phone && phone.length > 7) {
      value = `${phone.substring(0, 3)} ${phone.substring(3, 7)} ${phone.substring(7, phone.length)}`;
    } else if (phone && phone.length > 3 && phone.length <= 7) {
      value = `${phone.substring(0, 3)} ${phone.substring(3, phone.length)}`;
    }
    // console.log(value);
    return value;
  }

  render() {
    console.log(this.state.phone);
    return (
      <View style={styles.loginContainer}>
          <Image
            source={require("./img/logo.png")}
            style={styles.logo}
          />
          <View style={[styles.phoneRow, styles.loginBorder]}>
            <Image
              source={!this.state.phone ? require("./img/icon-phone.png") : require("./img/icon-phone-active.png") }
              style={styles.inputIcon}
            />
            <TextInput
              onChangeText={text => this.handleSPhoneChange(text)}
              value={this.formatPhone(this.state.phone)}
              style={[styles.loginInput, styles.phoneInput]}
              maxLength={13}
              keyboardType="numeric"
              placeholder="请输入手机号码"
            />
            {
              this.state.phone &&
              <TouchableOpacity onPress={() => {
                this.handleClearPhone();
              }}>
                <Image
                  source={require("./img/icon-delete.png") }
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            }
          </View>
          <View style={styles.smsCodeRow}>
            <View style={[styles.smsCode, styles.loginBorder]}>
              <Image
                source={!this.state.smsCode ? require("./img/icon-verifying.png") : require("./img/icon-verifying-active.png") }
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.loginInput, styles.smsCodeInput]}
                onChangeText={text => this.handleSmsCodeChange(text)}
                value={this.state.smsCode}
                maxLength={6}
                placeholder="请输入验证码"
              />
              {
                this.state.smsCode &&
                <TouchableOpacity onPress={() => {
                  this.handleClearSmsCode();
                }}>
                  <Image
                    source={require("./img/icon-delete.png") }
                    style={styles.deleteIcon}
                  />
                </TouchableOpacity>
              }
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
    width: Dimensions.get('window').width,
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
  phoneInput: {
    width: 210,
  },
  smsCodeInput: {
    width: 140,
  },
  deleteIcon: {
    width: 15,
    height: 15,
  },
  smsCodeBtn: {
    width: 90,
    height: 30,
    marginRight: 15,
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
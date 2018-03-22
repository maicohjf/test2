"use strict";

import React from "react";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Dimensions, View, Image, StyleSheet, TextInput, Button, Text } from "react-native";
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
          <View>
            <TextInput
            onChangeText={text => this.handleSPhoneChange(text)}
              style={{height: 49, borderWidth: 0}}
              placeholder="请输入手机号码"
            />
          </View>
          <View>
            <TextInput
              style={{height: 49, borderWidth: 0}}
              onChangeText={text => this.handleSmsCodeChange(text)}
              placeholder="请输入验证码"
            />
          </View>
          <Button
            title="登录"
            onPress={() => {
              this.handleLogin();
            }}
          />
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
  loginRow: {
  },
  loginContainer: {
    alignItems: "center",
  },
  logo: {
    overflow: "hidden",
    width: 100,
    height: 50,
    marginTop: 59,
    marginBottom: 35,
  },
  notice: {
    marginTop: 15,
    color: '#999',
    fontSize: 13,
  },
  noticeStrong: {
    color: '#388BED'
  }
});
  
/* exports ================================================================== */
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(LoginComponent);
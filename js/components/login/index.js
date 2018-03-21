"use strict";

import React from "react";
import { Dimensions, View, Image, StyleSheet, TextInput, Button, Text } from "react-native";

class LoginComponent extends React.Component {
  onLogin() {
    const { navigation } = this.props;
    navigation.dispatch({ type: 'Login' });
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
              style={{height: 49, borderWidth: 0}}
              placeholder="请输入手机号码"
            />
          </View>
          <View>
            <TextInput
              style={{height: 49, borderWidth: 0}}
              placeholder="请输入验证码"
            />
          </View>
          <Button
            title="登录"
            onPress={() => {
              this.onLogin();
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
module.exports = LoginComponent;
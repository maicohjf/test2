"use strict";

import React from "react";
import { connect } from 'react-redux';
import { TouchableOpacity, Dimensions, View, Image, Text, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';

class ProfileComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Login')}>
          <Text>登录</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Contract')}>
          <Text>合同</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Publish')}>
          <Text>我的发布</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Setting')}>
          <Text>设置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Message')}>
          <Text>我的消息</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Option')}>
          <Text>选填信息</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Verify')}>
              <Text>基本验证</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('BankCard')}>
              <Text>我的银行卡</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

ProfileComponent.navigationOptions = {
  title: '个人中心',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
  }
});
  
/* exports ================================================================== */
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(withNavigation(ProfileComponent));
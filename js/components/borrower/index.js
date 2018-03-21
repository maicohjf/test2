"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class BorrowerHomeComponent extends React.Component {
  render() {
    return (
      <View>
          <View style={styles.banner}>
            <Image
              style={styles.bannerImg}
              source={require("./img/banner1.png")}
            />
          </View>
          <View style={styles.nav}>
            <View style={styles.navView}>
              <Image
                source={require("./img/about.png")}
                style={styles.navIcon}
              />
              <Text>关于我们</Text>
            </View>
            <View style={styles.navView}>
              <Image
                source={require("./img/promote.png")}
                style={styles.navIcon}
              />
              <Text>提升额度</Text>
            </View>
            <View style={styles.navView}>
              <Image
                source={require("./img/invite.png")}
                style={styles.navIcon}
              />
              <Text>邀好友</Text>
            </View>
          </View>
          <View style={styles.notice}>
            <Image
              source={require("./img/notice-icon.png")}
              style={styles.noticeIcon}
            />
            <Text style={styles.noticeText}>来自上海的李女士，成功借款<Text style={styles.noticeStrong}>4000</Text>元。</Text>
          </View>
      </View>
    );
  }
}

BorrowerHomeComponent.navigationOptions = {
  title: '我要借款',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  banner: {
    overflow: 'hidden'
  },
  bannerImg: {
    height: 100,
    resizeMode: 'stretch',
  },
  nav: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  navView: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 55,
    height: 55,
  },
  notice: {
    marginTop: 10,
    paddingLeft: 15,
    height: 40,
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  noticeIcon: {
    width: 25,
    height: 25,
  },
  noticeText: {
    fontSize: 13,
    color: '#999',
  },
  noticeStrong: {
    color: '#388BED'
  }
});
  
/* exports ================================================================== */
module.exports = BorrowerHomeComponent;
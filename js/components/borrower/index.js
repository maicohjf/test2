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
            <View style={[styles.navView, styles.navPromote]}>
              <Image
                source={require("./img/promote.png")}
                style={styles.navIcon}
              />
              <Image
                source={require("./img/promote-tip.png")}
                style={styles.navTipIcon}
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
    overflow: 'hidden',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  bannerImg: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 200 / 670,
    resizeMode: 'contain',
  },
  nav: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  navView: {
    flex: 1,
    alignItems: 'center',
  },
  navPromote: {
    position: 'relative',
  },
  navIcon: {
    width: 55,
    height: 55,
    marginBottom: 11,
  },
  navTipIcon: {
    width: 20,
    height: 23,
    position: 'absolute',
    top: 0,
    right: 30,
  },
  notice: {
    marginTop: 10,
    paddingLeft: 15,
    height: 40,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  noticeIcon: {
    width: 25,
    height: 25,
  },
  noticeText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#999',
  },
  noticeStrong: {
    color: '#388BED'
  }
});
  
/* exports ================================================================== */
module.exports = BorrowerHomeComponent;
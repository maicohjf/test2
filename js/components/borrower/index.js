"use strict";

import React from "react";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, PixelRatio, Dimensions} from "react-native";
import SnapCarouselComponent from './carousel'
import CreditCardComponent from './credit'
import {Button} from "antd-mobile";

class BorrowerHomeComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ScrollView style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <View style={styles.banner}>
              <SnapCarouselComponent />
            </View>

            <View style={styles.nav}>
              <View style={styles.navView}>
                <Image
                    source={require("./img/about.png")}
                    style={styles.navIcon}
                />
                <View style={styles.navIconShaw}/>
                <Text style={styles.navText}>关于我们</Text>
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
                <View style={styles.navIconShaw}/>
                <Text style={styles.navText}>提升额度</Text>
              </View>
              <View style={styles.navView}>
                <Image
                    source={require("./img/invite.png")}
                    style={styles.navIcon}
                />
                <View style={styles.navIconShaw}/>
                <Text style={styles.navText}>邀好友</Text>
              </View>
            </View>

            <View style={styles.notice}>
              <Image
                  source={require("./img/notice-icon.png")}
                  style={styles.noticeIcon}
              />
              <Text style={styles.noticeText}>来自上海的李女士，成功借款<Text style={styles.noticeStrong}>4000</Text>元。</Text>
            </View>

            <CreditCardComponent/>

            <Button type="primary" style={styles.btn} onClick={() => this.props.navigation.navigate('PublishBorrowInfo')}>
              <Text style={{fontSize: 16, color: '#fff'}}>我要借款</Text>
            </Button>
          </View>
        </ScrollView>
    );
  }
}

BorrowerHomeComponent.navigationOptions = {
  title: '我要借款',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9'
  },
  banner: {
    backgroundColor: 'white'
  },
  nav: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
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
  },
  navIconShaw: {
    opacity: 0.2,
    backgroundColor: '#D8D8D8',
    width: 3,
    height: 3,
    marginTop: 3,
    marginBottom: 5,
    borderRadius: 1.5,
    transform: [
      {scaleX: 10}
    ]
  },
  navText: {
    color: "#222222",
    fontSize: 13,
    lineHeight: 18
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
    flexDirection: 'row',
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
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 44,
    backgroundColor: '#049bff',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 28,
    marginRight: 28
  }
});

/* exports ================================================================== */
export default connect()(withNavigation(BorrowerHomeComponent));
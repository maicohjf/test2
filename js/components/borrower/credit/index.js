/**
 * Created by liyanxi on 3/23/18.
 */
import React, {Component} from 'react';
import {Platform, View, Dimensions, StyleSheet, Image, TouchableOpacity, PixelRatio, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class CreditCardComponent extends Component {

  render() {
    return (
        <View style={styles.creditCard}>
          <LinearGradient colors={[colors.startColor, colors.endColor]}
                          startPoint={{x: 1, y: 0}}
                          endPoint={{x: 0, y: 1}}
                          style={styles.gradient}>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              alert("信用等级说明")
            }} style={styles.rightTopLabel}>
              <Text style={styles.rightTopText}>信用等级？</Text>
            </TouchableOpacity>
            <View style={styles.creditInfo}>
              <Text style={styles.creditTitle}>信用额度</Text>
              <View style={styles.creditLimit}>
                <Text style={styles.creditLimitMin}>最高可达</Text>
                <Text style={styles.creditLimitMax}>200000</Text>
                <Text style={styles.creditLimitMin}>元</Text>
              </View>
              <View style={styles.labels}>
                <View style={styles.labelBg}><Text style={styles.labelText}>额度高</Text></View>
                <View style={styles.labelBg}><Text style={styles.labelText}>权益多</Text></View>
                <View style={styles.labelBg}><Text style={styles.labelText}>定制私人借款方案</Text></View>
              </View>
            </View>
          </LinearGradient>
        </View>
    );
  }
}

const colors = {
  startColor: "#FBF4F4",
  endColor: "#FFFFFF"
};
const styles = StyleSheet.create({
  creditCard: {
    // shadowOffset: {width: 0, height: 2},
    // shadowColor: '#000000',
    // shadowOpacity: 0.2,
    elevation: 2,
  },
  gradient: {
    minHeight: 189,
    marginTop: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  rightTopLabel: {
    position: 'absolute',
    top: 15,
    right: 0,
    width: 95,
    height: 30,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#FF8F0A',
  },
  rightTopText: {
    lineHeight: 30,
    color: 'white',
    marginLeft: 10
  },
  creditInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 45,
  },
  creditTitle: {
    fontSize: 18,
    color: '#222222',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  creditLimit: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'flex-end',
    height: 62
  },
  creditLimitMin: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 11,
    lineHeight: 21
  },
  creditLimitMax: {
    fontSize: 44,
    color: '#222222',
    marginLeft: 3
  },
  labels: {
    marginTop: 10,
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelBg: {
    borderRadius: 10,
    borderColor: '#F5F9FF',
    borderWidth: 2,
    marginLeft: 10,
    backgroundColor: '#E1ECFD'
  },
  labelText: {
    fontSize: 11,
    color: '#2493FF',
    lineHeight: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from "react-native";
import PropTypes from 'prop-types';

export default class ContractDetailComponent extends Component {
  render() {
    return (
      <View style={styles.contractDetailContainer}>
        <View style={styles.contractDetailTable}>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>出借人</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>借款人</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>借款金额（元）</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>借款期限（个月）</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>借款年利率（%）</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>还款方式</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>起息日期</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>还款日期</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>投资人收款银行卡</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>借款人还款银行卡</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
          <View style={styles.contractDetailRow}>
            <View style={styles.tableLabel}>
              <Text>拒签理由</Text>
            </View>
            <View style={styles.tableValue}>
              <Text>Smith</Text>
            </View>
          </View>
        </View>
        <View style={styles.contractDetailTitle}>
          <Text style={styles.contractDetailText}>打款流水</Text>
        </View>
        <View style={styles.contractDetailImageView}>
          <Text style={styles.contractDetailImageText}>点击可查看流水</Text>
        </View>
      </View>
    );
  }
}

ContractDetailComponent.navigationOptions = {
  title: '合同详情',
  headerRight: (
    <Button
      onPress={() => alert('This is a Button!')}
      title="查看合同模版"
      color="#388bed"
    />
  ),
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  contractDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  contractDetailTable: {
    width: 345,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: "#e5e5e5"
  },
  contractDetailRow: {
    height: 34,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  tableLabel: {
    width: 130,
    justifyContent: 'center',
    paddingLeft: 5,
    borderRightWidth: 1,
    borderRightColor: "#e5e5e5"
  },
  tableValue: {
    width: 175,
    paddingLeft: 5,
    justifyContent: 'center',
  },
  tableText: {
    fontSize: 14
  },
  contractDetailTitle: {
    height: 44,
    justifyContent: 'center',
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  contractDetailText: {
    fontSize: 15,
  },
  contractDetailImageView: {
    width: 150,
    height: 115,
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'relative'
  },
  contractDetailImageText: {
    color: '#fff',
    bottom: 10,
    left: 23,
    position: 'absolute',
  }
});

/* exports ================================================================== */
module.exports = ContractDetailComponent;
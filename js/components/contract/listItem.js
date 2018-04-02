"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, PixelRatio} from "react-native";

export default class ContractListItemComponent extends Component {
  render() {
    return (
      <View style={styles.contractListItemContainer}>
        <View style={styles.contractListItemRow}>
          <Text style={styles.contractListItemLabel}>合同金额：</Text>
          <Text style={styles.contractListItemValue}>4000元</Text>
        </View>
        <View style={[styles.contractListItemRow]}>
          <Text style={styles.contractListItemLabel}>发起人：</Text>
          <Text style={styles.contractListItemValue}>李先生</Text>
        </View>
        <View style={styles.contractListItemRow}>
          <Text style={styles.contractListItemLabel}>发起时间：</Text>
          <Text style={styles.contractListItemValue}>2017-08-02 11:15:20</Text>
        </View>
        <Image
          source={require("./img/state-yijuqian-icon.png") }
          style={styles.contractIcon}
        />
        <TouchableOpacity
          style={styles.btnDetailContainer}
          onPress={() => {
            this.props.onDetail();
        }}>
          <View style={styles.btnDetail}>
            <Text style={{fontSize:15, color:'#2493ff'}}>查看详情</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  contractListItemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 17,
    marginBottom: 10,
    backgroundColor: '#fff',
    position: 'relative',
  },
  contractListItemRow: {
    flexDirection: 'row',
    height: 21,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contractListItemMargin: {
    marginVertical: 9
  },
  contractListItemLabel: {
    width: 75,
  },
  contractListItemValue: {
  },
  contractIcon: {
    width: 60,
    height: 45,
    position: 'absolute',
    top: 15,
    right: 110,
  },
  btnDetailContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  btnDetail: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2493ff'
  }
});

/* exports ================================================================== */
module.exports = ContractListItemComponent;
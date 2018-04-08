"use strict";

import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";


class BankCardComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardlist}>
                    <View style={styles.bankcard}>
                        <Image
                            source={require('./img/bank-icon.png')}
                            style={styles.bankcardIcon} />
                    </View>
                    <View style={styles.bankcontent}>
                        <Text style={styles.bankclass}>招商银行</Text>
                        <Text style={styles.bankidcard}>储蓄卡</Text>
                        <Text style={styles.banknum}>622* **** **** 0676</Text>
                    </View>
                    <View style={styles.bankcardtwo}>
                        <Image
                            source={require('./img/bank-icon-two.png')}
                            style={styles.bankcardIcontwo} />
                    </View>
                </View>
            </View>
        );
    }
}


BankCardComponent.navigationOptions = {
    title: '我的银行卡',
};

/* StyleSheet ===============================================================*/

const styles = StyleSheet.create({
   cardlist: {
        height: 100,
        backgroundColor: '#E50012',
        opacity: 1,
        marginTop: 15,
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        elevation: 4,
    },
    bankcard: {
        height: 51,
        width: 51,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginLeft: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bankcardIcon: {
        width: 40,
        height: 40,
    },
    bankcontent: {
        marginLeft: 12.5,
        marginTop: 10.5,
        fontSize: 30,
    },
    bankclass: {
        color: '#fff',
    },
    bankidcard: {
        color: '#fff',
        marginTop: 5,
        marginBottom: 10,
    },
    banknum: {
        color: '#fff',
    },
    bankcardtwo: {
        width: 110,
        height: 100,
        marginLeft: 9,
        opacity: 0.1,
        backgroundColor: '#611C21',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bankcardIcontwo: {
        width: 170,
        height: 170,
        opacity: 1,
    }
});

/* exports ================================================================== */
module.exports = BankCardComponent;
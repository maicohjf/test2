"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, ScrollView } from "react-native";
import Color from '../../../constants/colors'

import DetailTab from './detailTab';

class PublishDetailComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.publish}>
                    <View style={styles.details}>
                        <View style={styles.headshotBg}>
                            <Image source={require("../img/image-2.png")} style={styles.publishIcon} />
                            <Image source={require("../img/real-name-icon.png")} style={styles.realName} />
                        </View>
                        <View style={styles.capitalContainer}>
                            <Text style={styles.phone}>135 3333 9123</Text>
                            <View style={styles.capital}>
                                <Text style={[styles.address, styles.publishFont]}>北京市</Text>
                                <Text style={[styles.addressType, styles.publishFont]}>个体户</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.asset}>
                        <View style={styles.assetLine}>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>借款金额</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[styles.amount, styles.lineAmount]}>0.8</Text>
                                    <Text style={[styles.lineValue, styles.lineAmount]}>万元</Text>
                                </View>
                            </View>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>借款期限</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.amount}>6</Text>
                                    <Text style={styles.lineValue}>个月</Text>
                                </View>
                            </View>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>年化率</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.amount}>12</Text>
                                    <Text style={styles.lineValue}>%</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.assetLine}>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>借款城市</Text>
                                <Text style={styles.lineValue}>上海</Text>
                            </View>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>借款用途</Text>
                                <Text style={styles.lineValue}>个人消费</Text>
                            </View>
                            <View style={styles.line}>
                                <Text style={[styles.publishFont, styles.lineLabel]}>用款时间</Text>
                                <Text style={styles.lineValue}>2018.04.10</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <DetailTab></DetailTab>
            </View>
        );
    }
}

PublishDetailComponent.navigationOptions = {
    title: '我的借款信息',
};

/* StyleSheet =============================================================== */
const colors = {
    startColor: "#FFFFFF",
    endColor: "#F6FAFD",
    bgColor: '#f4f7f9'
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    publish: {
        position: 'relative',
        backgroundColor: Color.white,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 75,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    realName: {
        width: 34,
        height: 13,
        position: 'absolute',
        top: 0,
        right: 2.5,
    },
    headshotBg: {
        position: 'relative',
        width: 75,
        height: 75,
        alignItems: 'center',
        backgroundColor: colors.bgColor,
        borderRadius: 50,
    },
    publishIcon: {
        width: 70,
        height: 70,
        marginTop: 2.5,
    },
    capitalContainer: {
        marginLeft: 14.5,
    },
    phone: {
        fontSize: 15,
        color: Color.black,
        lineHeight: 21,
        height: 21,
    },
    address: {
        height: 15,
    },
    addressType: {
        height: 15,
        marginLeft: 10,
    },
    capital: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 6,
    },
    publishFont: {
        fontSize: 13,
        color: Color.black_very_light,
    },
    asset: {
        borderRadius: 10,
        borderTopRightRadius: 0,
        paddingTop: 10,
    },
    assetLine: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    line: {
        flex: 1,
        alignItems: 'center',
    },
    lineLabel: {
        height: 20,
        lineHeight: 20,
    },
    lineValue: {
        fontSize: 13,
        color: Color.black,
        height: 25,
        lineHeight: 25,
    },
    amount: {
        fontSize: 18,
    },
    lineAmount: {
        color: Color.blue,
    },
});

/* exports ================================================================== */
module.exports = PublishDetailComponent;
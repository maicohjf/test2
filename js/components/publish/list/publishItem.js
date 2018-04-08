"use strict";

import React from "react";
import { connect } from 'react-redux';
import { Dimensions, View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "antd-mobile";
import Color from '../../../constants/colors'

class PublishComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { index, item } = this.props;
        return (
            <LinearGradient colors={[colors.startColor, index === 0 ? colors.endColor : colors.startColor]}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={[styles.publish, index === 0 ? { marginTop: 10 } : '']}>
                <View style={styles.publish}>
                    <View style={styles.details}>
                        <View style={styles.headshotBg}>
                            <Image
                                source={require("../img/image-2.png")}
                                style={styles.publishIcon}
                            />
                            <Image
                                source={require("../img/real-name-icon.png")}
                                style={styles.realName}
                            />
                        </View>
                        <View style={styles.capitalContainer}>
                            <View style={styles.capital}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={[styles.publishFont, styles.time]}>{item.time}</Text>
                            </View>
                            <View style={styles.capital}>
                                <Text style={[styles.address, styles.publishFont]}>{item.publishFont}</Text>
                                <Text style={[styles.addressType, styles.publishFont]}>{item.publishHk}</Text>
                            </View>
                            <View style={styles.capital}>
                                <View style={styles.capitalLine}>
                                    <Text style={styles.ammount}>{item.ammount}</Text>
                                    <Text style={styles.publishFont}>万元</Text>
                                </View>
                                <View style={styles.capitalLine}>
                                    <Text style={styles.ammount}>{item.mouth}</Text>
                                    <Text style={styles.publishFont}>个月还款</Text>
                                </View>
                                <View style={styles.capitalLine}>
                                    <Text style={styles.ammount}>12</Text>
                                    <Text style={styles.symbol}>%</Text>
                                    <Text style={styles.publishFont}>年化率</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button type="primary" style={styles.publishBtn} onClick={() => this.props.navigation.navigate('PublishDetail')}>
                        <Text style={styles.btnValue}>抢单中</Text>
                    </Button>
                    <View style={styles.asset}>
                        <View style={styles.assetLine}>
                            <View style={styles.line}>
                                <Image source={require("../img/yueshouru-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>月收入{item.wage}万元</Text>
                            </View>
                            <View style={styles.line}>
                                <Image source={require("../img/gongjijin-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>无公积金</Text>
                            </View>
                            <View style={styles.line}>
                                <Image source={require("../img/insurance-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>有社保</Text>
                            </View>
                        </View>
                        <View style={styles.assetLine}>
                            <View style={styles.line}>
                                <Image source={require("../img/credit-card-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>无信用卡</Text>
                            </View>
                            <View style={styles.line}>
                                <Image source={require("../img/house-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>有房产</Text>
                            </View>
                            <View style={styles.line}>
                                <Image source={require("../img/car-icon.png")} style={styles.assetIcon} />
                                <Text style={styles.lineValue}>有车产</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

PublishComponent.navigationOptions = {
    title: '我的发布',
};

/* StyleSheet =============================================================== */
const colors = {
    startColor: "#FFFFFF",
    endColor: "#F6FAFD",
    bgColor: '#f4f7f9'
};
const styles = StyleSheet.create({
    publish: {
        position: 'relative',
        height: 150,
        backgroundColor: Color.white,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Color.black,
        shadowOpacity: 0.1,
        elevation: 1,
        borderRadius: 10,
    },
    details: {
        height: 75,
        flexDirection: 'row',
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
    name: {
        fontSize: 15,
        color: Color.black,
        lineHeight: 20,
        height: 20,
        marginRight: 11,
    },
    time: {
        lineHeight: 17.5,
    },
    publishBtn: {
        position: 'absolute',
        top: 10,
        right: 15,
        // width: 60,
        height: 25,
        // backgroundColor: Color.blue_very_light,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 50,
    },
    btnValue: {
        fontSize: 13,
        color: Color.white,
    },
    address: {
        height: 15,
        lineHeight: 15,
    },
    addressType: {
        height: 15,
        lineHeight: 15,
        marginLeft: 10,
    },
    capital: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginBottom: 5,
    },
    capitalLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    ammount: {
        fontSize: 18,
        color: Color.blue,
        height: 20,
        lineHeight: 20,
    },
    symbol: {
        fontSize: 13,
        color: Color.blue,
    },
    publishFont: {
        fontSize: 13,
        color: Color.gray_light,
    },
    asset: {
        height: 60,
        backgroundColor: colors.bgColor,
        borderRadius: 10,
        borderTopRightRadius: 0,
        paddingTop: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Color.black,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    assetLine: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 10,
    },
    lineValue: {
        fontSize: 12,
        color: Color.black_light,
    },
    assetIcon: {
        width: 12,
        height: 12,
        marginRight: 5,
    },
});

/* exports ================================================================== */
module.exports = connect()(withNavigation(PublishComponent));
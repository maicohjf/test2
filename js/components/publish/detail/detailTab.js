/**
 * 投资人信息
 * Created by liyanxi on 3/27/18.
 */

"use strict";

import React, { Component } from "react";
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, PixelRatio, ScrollView } from 'react-native';
import Color from '../../../constants/colors';
import { Modal, Button, Toast } from 'antd-mobile';

const alert = Modal.alert;
class InvestorInfo extends React.Component {
    static defaultProps = {
        investDemand: ["不介意借款人身份", "有社保有公积金", "2年以上营业执照", "无车产也可", "无房产也可"],
        investCity: ["阿克苏", "呼和浩特", "哈尔冰", "深圳", "上海"],
    };

    constructor(props) {
        super(props);
        this.state = {
            curTab: 0,
            BtnClose: 0
        }
    }

    get baseInfoView() {
        return (
            <View style={styles.baseInfoContainer}>
                <View style={styles.baseInfoOne}>
                    <View style={styles.infoOne}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.infoLeft}>对外称呼</Text>
                            <Text style={styles.infoValue}>张女士</Text></View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.infoLeft}>职业身份</Text>
                            <Text style={styles.infoValue}>上班族</Text></View>
                    </View>
                    <View style={styles.infoOne}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.infoLeft}>年龄</Text>
                            <Text style={styles.infoValue}>26</Text></View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.infoLeft}>实名认证</Text>
                            <Text style={styles.infoValue}>已实名</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.infoLeft}>户籍</Text>
                        <Text style={styles.infoValue}>上海市浦东新区福山路33号建工小区6号7A</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.infoLeft}>银行卡</Text>
                        <Text style={styles.infoValue}>6222 1*** **** 0000</Text>
                    </View>
                </View>
            </View>
        );
    }

    createTag(label) {
        return (
            <View style={styles.tagSolidStyle} key={label}><Text style={styles.tagSolidText}>{label}</Text></View>
        );
    }

    get investIntentionView() {
        return (
            <View style={styles.baseInfoContainer}>
                <View style={styles.intentionContainer}>
                    <View style={styles.intentFlowContainer}>
                        {this.props.investDemand.map((tag, i) => this.createTag(tag))}
                    </View>
                </View>
                <View style={[styles.intentionContainer, styles.baseInfoTwo]}>
                    <View style={styles.intentFlowContainer}>
                        {this.props.investCity.map((tag, i) => this.createTag(tag))}
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
                <View style={styles.investorInfoContainer}>
                    <View style={styles.infoTabs}>
                        <TouchableOpacity activeOpacity={1} style={styles.infoTab} onPress={() => this.setState({ curTab: 0 })}>
                            <Text style={styles.infoTabText}>基本信息</Text>
                            {this.state.curTab === 0 && <View style={styles.selectedLine} />}
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.infoTab} onPress={() => this.setState({ curTab: 1 })}>
                            <Text style={styles.infoTabText}>资产情况</Text>
                            {this.state.curTab === 1 && <View style={styles.selectedLine} />}
                        </TouchableOpacity>
                        <View style={styles.dividerLine} />
                    </View>
                    {this.state.curTab === 0 ? this.baseInfoView : this.investIntentionView}
                    <Button style={styles.btnQuick} onClick={() =>
                        alert('提示', '后续投资人将无法查看此条借款信息！', [
                            { text: '取消' },
                            {
                                text: '确认', onPress: () => new Promise((resolve) => {
                                    this.setState({ BtnClose: 1 });
                                    Toast.info(this.state.BtnClose);
                                    setTimeout(resolve, 1000);
                                }),
                            },
                        ])
                    }>
                        {this.state.BtnClose === 0 ? <Text style={{ color: Color.blue_light, fontSize: 15 }}>关闭此条借款信息</Text> : <Text style={{ color: Color.blue_light, fontSize: 15 }}>您已关闭此条借款信息</Text>}
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

InvestorInfo.navigationOptions = {
    title: '投资人信息',
};
const colors = {
    bgColor: '#f4f7f9',
};
const styles = StyleSheet.create({
    investorInfoContainer: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    infoTabs: {
        backgroundColor: Color.white,
        height: 44,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    dividerLine: {
        height: 1 / PixelRatio.get(),
        backgroundColor: Color.black,
        opacity: 0.1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    infoTab: {
        width: 125
    },
    selectedLine: {
        backgroundColor: Color.blue,
        height: 2,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    infoTabText: {
        color: Color.black_light,
        fontSize: 13,
        lineHeight: 44,
        textAlign: 'center'
    },
    baseInfoContainer: {},
    baseInfoOne: {
        paddingTop: 15,
        paddingLeft: 15,
        backgroundColor: Color.white
    },
    baseInfoTwo: {
        marginTop: 10,
    },
    infoLeft: {
        lineHeight: 34,
        color: Color.black_light,
        fontSize: 13,
        minWidth: 65,
    },
    infoValue: {
        lineHeight: 34,
        color: Color.black_very_light,
        fontSize: 13,
    },
    infoOne: {
        flexDirection: 'row',
    },
    intentionContainer: {
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: Color.white
    },
    intentFlowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    tagSolidStyle: {
        borderRadius: 50,
        backgroundColor: '#43A4FF',
        minHeight: 30,
        margin: 5,
        justifyContent: 'center',
    },
    tagSolidText: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: Color.white,
    },
    btnQuick: {
        marginLeft: 27,
        marginRight: 27,
        marginTop: 40,
        marginBottom: 20,
        borderColor: Color.blue_very_light,
        borderRadius: 50,
    }
});

export default connect()(withNavigation(InvestorInfo));
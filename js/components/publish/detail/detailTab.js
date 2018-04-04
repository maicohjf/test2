"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import Color from '../../../constants/colors';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';

class PublishDetailComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                qqqqqq
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
});

/* exports ================================================================== */
module.exports = PublishDetailComponent;
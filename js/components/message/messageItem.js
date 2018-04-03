"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

class MessageComponent extends React.Component {
    render() {
        const { index, item } = this.props;
        return (
            <LinearGradient colors={[colors.startColor, index === 0 ? colors.endColor : colors.startColor]}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={[styles.message, index === 0 ? { marginTop: 10 } : '']}>
                <View style={styles.message}>
                    <Image
                        source={require("./img/activity1.png")}
                        style={styles.messageIcon}
                    />
                    <View style={styles.reward}>
                        <Text style={styles.rewardType}>{item.rewardType}</Text>
                        <Text style={styles.rewardContent}>{item.rewardContent}</Text>
                        <Text style={styles.rewardTime}>{item.rewardTime}</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

MessageComponent.navigationOptions = {
    title: '我的消息',
};

/* StyleSheet =============================================================== */
const colors = {
    startColor: "#FFFFFF",
    endColor: "#FFFFFF"
};
const styles = StyleSheet.create({
    message: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 17.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderWidth: 1,
        // borderColor: 'yellow'
    },
    messageIcon: {
        width: 56,
        height: 56,
    },
    reward: {
        marginLeft: 21.5,
    },
    rewardType: {
        fontSize: 15,
        color: '#000',
        lineHeight: 25,
        height: 25,
    },
    rewardContent: {
        fontSize: 13,
        color: '#388BED',
        lineHeight: 23,
        height: 25,
    },
    rewardTime: {
        fontSize: 13,
        color: '#ccc',
        lineHeight: 25,
        height: 25,
    },
    noList: {
        flex: 1,
        fontSize: 13,
        color: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

/* exports ================================================================== */
module.exports = MessageComponent;
"use strict";

import React from "react";
import { Dimensions, View, Text, StyleSheet, Image, Switch, TouchableOpacity } from "react-native";

class SettingComponent extends React.Component {

    state = {
        value: false,
        disabled: false,
    }

    render() {
        return (
            <View style={styles.setting}>
                <View style={styles.setting}>
                    <View style={styles.settingContent}>
                        <Text style={styles.settingInfo}>版本信息</Text>
                        <Image 
                            source={require('./img/icon-arrownext.png')}
                            style={styles.settingIcon} />
                    </View>
                    <View style={styles.settingContent}>
                        <Text style={styles.settingInfo}>关闭投资需求</Text>
                        <View style={styles.switchButton}>
                            <Switch onTintColor='#43A4FF' thumbTintColor='#fff' value={this.state.value}
                                onValueChange={(value) => {
                                    this.setState({
                                        value: value,
                                    });
                                }} >
                            </Switch>
                        </View>
                    </View>
                </View>
                <View style={styles.logOut}>
                    <TouchableOpacity style={styles.logBtn}>
                        <Text>安全退出</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SettingComponent.navigationOptions = {
    title: '设置',
};

/* StyleSheet ===============================================================*/

const styles = StyleSheet.create({
    setting: {
        flex: 1,
    },
    settingContent: {
        backgroundColor: '#fff',
        marginTop: 10.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
    },
    settingInfo: {
        height: 44,
        lineHeight: 44,
        color: '#666',
        fontSize: 15,
    },
    settingIcon: {
        width: 20,
        height:22,
    },
    switchButton: {
        width: 44,
        height: 25,
    },
    logOut: {
        height: 44,
        backgroundColor: '#fff',
        // marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/* exports ================================================================== */
module.exports = SettingComponent;
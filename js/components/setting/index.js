"use strict";

import React from "react";
import { Dimensions, AppRegistry, View, Text, StyleSheet, Image, Switch, TouchableOpacity } from "react-native";

class SettingComponent extends React.Component {

    state = {
        value: false,
        disabled: false,
    }

    render() {
        return (
            <View>
                <View style={styles.versionInfo}>
                    <Text style={styles.settingInfo}>版本信息</Text>
                    <Image source={require('./img/icon-arrownext.png')} />
                </View>
                <View style={styles.closeNeed}>
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
    versionInfo: {
        backgroundColor: '#fff',
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
    },
    closeNeed: {
        backgroundColor: '#fff',
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
    },
    settingInfo: {
        height: 44,
        lineHeight: 44,
        color: '#666',
        fontSize: 15,
    },
    switchButton: {
        width: 44,
        height: 25,
    },
    logOut: {
        height: 44,
        backgroundColor: '#fff',
        marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/* exports ================================================================== */
module.exports = SettingComponent;
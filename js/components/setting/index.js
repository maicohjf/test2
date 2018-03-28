"use strict";

import React from "react";
import { Dimensions, AppRegistry, View, Text, StyleSheet, Image} from "react-native";

class SettingComponent extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.versionInfo}>
                    <Text style={styles.version}>版本信息</Text>
                    <Image source={require('./img/icon-arrownext.png')} />
                </View>
                <View style={styles.closeNeed}>
                    <Text style={styles.close}>关闭投资需求</Text>
                    <Image source={require('./img/icon-arrownext.png')} />
                </View>
            </View>
        );
    }
}

SettingComponent.navigationOptions = {
    title: 'Setting Screen',
};

/* StyleSheet ===============================================================*/

const styles = StyleSheet.create({
    versionInfo: {
        backgroundColor: '#fff',
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeNeed: {
        backgroundColor: '#fff',
        marginTop: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    version: {
        width: 325,
        height: 44,
        lineHeight: 44,
        color: '#666',
        fontSize: 15,
    },
    close: {
        width: 325,
        height: 44,
        lineHeight: 44,
        color: '#666',
        fontSize: 15,
    },
});

// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

/* exports ================================================================== */
module.exports = SettingComponent;
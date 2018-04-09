"use strict";

import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text, Button, } from 'react-native';
import { Picker, List, WhiteSpace, InputItem, Checkbox, Flex, Toast } from 'antd-mobile';
import BankItem from './bankitem';


export default class Bank extends React.Component {
    
    static defaultProps = {data:[
        {id:1,  image:'Bank-icon', name: '招商银行'},
        {id:2,  image:'Bank-icon', name: '工商银行'},
        {id:3,  image:'Bank-icon', name: '农业银行'},
        {id:4,  image:'Bank-icon', name: '中国银行'},
        {id:5,  image:'Bank-icon', name: '建设银行'},
        {id:6,  image:'Bank-icon', name: '交通银行'},
        {id:7,  image:'Bank-icon', name: '光大银行'},
        {id:8,  image:'Bank-icon', name: '华夏银行'},
        {id:9,  image:'Bank-icon', name: '中信银行'},
        {id:10, image:'Bank-icon', name: '兴业银行'},
        {id:11, image:'Bank-icon', name: '平安银行'},
        {id:12, image:'Bank-icon', name: '浦发银行'},
    ]};

    _renderItem = ({ item, index }) => {
        return <BankItem index = {index} item = {item} />;
    }


    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style = {styles.bankContainer} >
                <FlatList style = {styles.flatList}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                    data = {this.props.data}>
                </FlatList>
                <View style = {styles.bottom}>
                    <Text>共支持 {this.props.data.length} 家银行</Text>
                </View>
            </View>
        );
    };    

}

Bank.navigationOptions = {
    title: '支持银行',
};

let styles = StyleSheet.create({
    bankContainer: {
        flex: 1,
    },

    flatList: {
        flex: 1,
    },

    bottom: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f7f9',
    },

    text: {
        fontSize: 13,
        backgroundColor: '#999',
    }

});
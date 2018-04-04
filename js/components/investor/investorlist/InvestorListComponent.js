"use strict";

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';

import InvestorListItem from './InvestorListItem'

var ITEM_HEIGHT = 100;

export default class InvestorListComponent extends Component {

    static defaultProps = {
        _messageData: 
        [{id: '1', rewardTypeId: '1', name: '李女士', publishFont: '北京市', publishHk: '个体户', time: '02-16 16:42', ammount: '0.8', mouth: '8', wage: '0.8' },
		{id: '2', rewardTypeId: '0', name: '张小姐', publishFont: '上海市', publishHk: '个体户', time: '02-18 16:42', ammount: '0.6', mouth: '6', wage: '0.8'},
		{id: '3', rewardTypeId: '1', name: '王女士', publishFont: '武汉市', publishHk: '个体户', time: '02-20 16:42', ammount: '1.2', mouth: '9', wage: '0.8'},
		{id: '4', rewardTypeId: '0', name: '赵小姐', publishFont: '深圳市', publishHk: '个体户', time: '02-24 16:42', ammount: '0.9', mouth: '7', wage: '0.8'},]
	  };

    _flatList;
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            loading: false,
            refreshing: false,
          }            
        }    

    _renderItem = ({ item, index }) => {
        return <InvestorListItem index = {index} item = {item}/>
    }



    _renderItem = ({ item, index }) => {
        return <InvestorListItem index = {index} item = {item} />
    }
 
    _separator = () => {
        return <View style={{height: 10, flex: 1}}/>;
    }

    _keyExtractor = (item, index) => index.toString();


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        data={this.props._messageData}>
                    </FlatList>
                </View>

            </View>
        );
    }
}

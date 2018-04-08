"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Picker, List, WhiteSpace, InputItem, Button, Checkbox, Flex, Toast } from 'antd-mobile';
import Items from "./items";
import LoadMore from '../common/loadmore';
class buyBorrowerComponent extends React.Component {
  static defaultProps = {
    _data: [
      {id: '1', name: '洪先生'}, {id: '2', name: '李先生'}, {id: '3', name: '留先生'}
    ]
  }
  

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
    }
  }

  _renderItem = ({item, index}) => {
    return (<Items index={index} item={item}/>);
  }

  _renderFooter = () => {
    return (<LoadMore loading={this.state.loading}/>);
  }

  _handleRefresh = () => {
    //下拉刷新
    this.setState({
      loading: false,
      refreshing: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        refreshing: false
      });
      Toast.show("下拉刷新完成")
    }, 3000);
  };

  render() {
    return (
      

        <FlatList
          data = {this.props._data}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
          onRefresh={this._handleRefresh}
          refreshing={this.state.refreshing}
        />

        

      
    );
  }
}

buyBorrowerComponent.navigationOptions = {
  title: '借款人-我的购买',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    item: {
      marginTop: 10,
      height: 80,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center', 
      paddingLeft: 15,
      paddingRight: 15,
    },
    icon: {
      marginLeft: 5,
      width: 56,
      height: 56,
    },
    itemCenter: {
      width: 185,
      marginLeft: 22,
    },
    name: {
      color: '#000',
      fontSize: 15,
      marginBottom: 16,
    },
    nameinfo: {
      fontSize:13, 
      color: '#388BED',
    },
    nametime:{
      fontSize:13, 
      color: '#CCC',
    },
    seeInfo: {
      width: 80,
      height: 30,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#2493FF',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    seeInfotext: {
      color: '#2493FF',
      fontSize: 15,
    },
    seeInfoclo: {
      width: 60,
      height: 25,
      // borderWidth: 1,
      borderRadius: 50,
      // borderColor: '#2493FF',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#DADADA',
      marginLeft: 10,
    },
    seeInfotextclo: {
      color: 'white',
      fontSize: 13,
    },
    realname: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#FFF1DB',
      width: 33,
      height: 13,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#FF935C',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    realnametext: {
      fontSize: 9,
      color: '#FF935C',
    },
    realnameclo: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#F4F7F9',
      width: 33,
      height: 13,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#ccc',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    realnametextclo: {
      fontSize: 9,
      color: '#ccc',
    },
    nomore: {
      marginTop: 15,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    nomoretext: {
      fontSize: 13,
      color: '#CCCCCC'
    }
});
  
/* exports ================================================================== */
module.exports = buyBorrowerComponent;
"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import LoadMore from '../common/loadmore';
import { Toast } from 'antd-mobile';

import MessageItem from './messageItem';

class MessageComponent extends React.Component {

  static defaultProps = {
    _messageData: [{id: '1', rewardTypeId: '1', rewardType: '首投奖励', rewardContent: '+1次数券', rewardTime: '02-16 16:42'},
    {id: '2', rewardTypeId: '0', rewardType: '邀请奖励', rewardContent: '500代金券', rewardTime: '02-18 16:42'},
    {id: '3', rewardTypeId: '1', rewardType: '注册奖励', rewardContent: '300代金券', rewardTime: '02-20 16:42'},
    {id: '4', rewardTypeId: '0', rewardType: '投资奖励', rewardContent: '100代金券', rewardTime: '02-24 16:42'},]
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      loading: false,
      refreshing: false,
    }
  }

  _keyExtractor = (item, index) => item.id;

  _onPressItem = () => {
    this.props.navigation.navigate("Message")
  };

  _renderItem = ({item, index}) => {
    return (<MessageItem index={index} item={item} onDateil={this._onPressItem}/>);
  };
  
  _renderSeparator = () => {
    return (
        <View style={{height: 10, flex: 1}}/>
    );
  };

  _renderFooter = () => {
    return (<LoadMore loading={this.state.loading}/>);
  };

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
    }, 1000);
  };

  _handleLoadMore = () => {
    console.log("触发底部加载更多");
    //加载更多
    this.setState({
      loading: true,
      refreshing: false
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
      Toast.show("上拉加载更多完成")
    }, 1000);
  };

  render() {
    return (
      <FlatList
        data={this.props._messageData}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this._handleRefresh}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={0}
        ItemSeparatorComponent={this._renderSeparator}
        ListFooterComponent={this._renderFooter}
        style={styles.container}
      />
    );
  }
}

MessageComponent.navigationOptions = {
  title: '我的消息',
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F4F7F9',
      marginBottom: 10,
  },
});
/* exports ================================================================== */
module.exports = MessageComponent;
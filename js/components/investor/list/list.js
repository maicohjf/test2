/**
 * 选取投资人列表
 * Created by liyanxi on 3/26/18.
 */
"use strict";

import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import InvestorItem from './listitem';
import LoadMore from '../../common/loadmore';
import {Toast} from 'antd-mobile';


export default class investListComponent extends React.PureComponent {

  static defaultProps = {
    _data: [{id: '1', name: '洪先生'}, {id: '2', name: '李先生'}, {id: '3', name: '留先生'}, {id: '4', name: '赵先生'}, {
      id: '5',
      name: '赵先生'
    }, {id: '6', name: '赵先生'}, {id: '7', name: '赵先生'}, {id: '8', name: '赵先生'}, {id: '9', name: '赵先生'},]
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
    this.props.navigation.navigate("InvestorDetail")
  };

  _renderItem = ({item, index}) => {
    return (<InvestorItem index={index} item={item} onDetail={this._onPressItem}/>);
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
    }, 3000);
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
    }, 3000);

  };

  render() {
    return (
        <FlatList
            data={this.props._data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            refreshing={this.state.refreshing}
            onRefresh={this._handleRefresh}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0}
            ItemSeparatorComponent={this._renderSeparator}
            ListFooterComponent={this._renderFooter}
            style={styles.investListContainer}
        />
    );
  }
}

investListComponent.navigationOptions = {
  title: '选取投资人列表',
};

const styles = StyleSheet.create({
  investListContainer: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    paddingTop: 10
  },
});
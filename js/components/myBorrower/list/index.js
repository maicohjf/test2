"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet, FlatList } from "react-native";
import LoadMore from '../../common/loadmore';
import { Toast } from 'antd-mobile';

import PublishItem from './publishItem';

class PublishComponent extends React.Component {
	static defaultProps = {
		_messageData: [{ id: '1', rewardTypeId: '1', name: '李女士', publishFont: '北京市', publishHk: '个体户', time: '02-16 16:42', ammount: '0.8', mouth: '8', wage: '0.8' },
		{ id: '2', rewardTypeId: '0', name: '张小姐', publishFont: '上海市', publishHk: '个体户', time: '02-18 16:42', ammount: '0.6', mouth: '6', wage: '0.8' },
		{ id: '3', rewardTypeId: '1', name: '王女士', publishFont: '武汉市', publishHk: '个体户', time: '02-20 16:42', ammount: '1.2', mouth: '9', wage: '0.8' },
		{ id: '4', rewardTypeId: '0', name: '赵小姐', publishFont: '深圳市', publishHk: '个体户', time: '02-24 16:42', ammount: '0.9', mouth: '7', wage: '0.8' },]
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

	_renderItem = ({ item, index }) => {
		return (<PublishItem index={index} item={item} onDateil={this._onPressItem} />);
	};

	_renderSeparator = () => {
		return (
			<View style={{ height: 10, flex: 1 }} />
		);
	};

	_renderFooter = () => {
		return (<LoadMore loading={this.state.loading} />);
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
				renderItem={this._renderItem}
				// extraData={this.state}
				// keyExtractor={this._keyExtractor}
				// refreshing={this.state.refreshing}
				// onRefresh={this._handleRefresh}
				// onEndReached={this._handleLoadMore}
				// onEndReachedThreshold={0}
				// ItemSeparatorComponent={this._renderSeparator}
				// ListFooterComponent={this._renderFooter}
				// style={styles.container}
			/>
		);
	}
}

PublishComponent.navigationOptions = {
	title: '我的购买-借款人',
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f7f9',
		marginLeft: 10,
		marginRight: 10,
	},
});

/* exports ================================================================== */
module.exports = PublishComponent;
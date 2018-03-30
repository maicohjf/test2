"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class PublishComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.publish}>
					<View style={styles.details}>
						<View style={styles.headshotBg}>
							<Image
								source={require("./img/image-2.png")}
								style={styles.publishIcon}
							/>
							<Image
								source={require("./img/real-name-icon.png")}
								style={styles.realName}
							/>
						</View>
						<View style={styles.capitalContainer}>
							<View style={styles.capital}>
								<Text style={styles.name}>李女士</Text>
								<Text style={[styles.publishFont, styles.time]}>03-08 09:46</Text>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.address, styles.publishFont]}>北京市</Text>
								<Text style={[styles.addressType, styles.publishFont]}>个体户</Text>
							</View>
							<View style={styles.capital}>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>0.8</Text>
									<Text style={styles.publishFont}>万元</Text>
								</View>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>8</Text>
									<Text style={styles.publishFont}>个月还款</Text>
								</View>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>12</Text>
									<Text style={styles.symbol}>%</Text>
									<Text style={styles.publishFont}>年化率</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.publishBtn}>
						<Text style={{ fontSize: 13, color: '#fff' }}>抢单中</Text>
					</View>
					<View style={styles.asset}>
						<View style={styles.assetLine}>
							<View style={styles.line}>
								<Image source={require("./img/yueshouru-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>月收入0.5万元</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/gongjijin-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>无公积金</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/insurance-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有社保</Text>
							</View>
						</View>
						<View style={styles.assetLine}>
							<View style={styles.line}>
								<Image source={require("./img/credit-card-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>无信用卡</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/house-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有房产</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/car-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有车产</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.publish}>
					<View style={styles.details}>
						<View style={styles.headshotBg}>
							<Image
								source={require("./img/image-2.png")}
								style={styles.publishIcon}
							/>
							<Image
								source={require("./img/real-name-1-icon.png")}
								style={styles.realName}
							/>
						</View>
						<View style={styles.capitalContainer}>
							<View style={styles.capital}>
								<Text style={styles.name}>李女士</Text>
								<Text style={[styles.publishFont, styles.time]}>03-08 09:46</Text>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.address, styles.publishFont]}>北京市</Text>
								<Text style={[styles.addressType, styles.publishFont]}>个体户</Text>
							</View>
							<View style={styles.capital}>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>0.8</Text>
									<Text style={styles.publishFont}>万元</Text>
								</View>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>8</Text>
									<Text style={styles.publishFont}>个月还款</Text>
								</View>
								<View style={styles.capitalLine}>
									<Text style={styles.ammount}>12</Text>
									<Text style={styles.symbol}>%</Text>
									<Text style={styles.publishFont}>年化率</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.publishBtn}>
						<Text style={{ fontSize: 13, color: '#fff' }}>抢单中</Text>
					</View>
					<View style={styles.asset}>
						<View style={styles.assetLine}>
							<View style={styles.line}>
								<Image source={require("./img/yueshouru-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>月收入0.5万元</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/gongjijin-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>无公积金</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/insurance-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有社保</Text>
							</View>
						</View>
						<View style={styles.assetLine}>
							<View style={styles.line}>
								<Image source={require("./img/credit-card-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>无信用卡</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/house-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有房产</Text>
							</View>
							<View style={styles.line}>
								<Image source={require("./img/car-icon.png")} style={styles.assetIcon} />
								<Text style={styles.lineValue}>有车产</Text>
							</View>
						</View>
					</View>
				</View>
				<Text style={styles.noList}>没有更多了</Text>
			</View>
		);
	}
}

PublishComponent.navigationOptions = {
	title: '我的发布',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		backgroundColor: '#f4f7f9',
	},
	publish: {
		position: 'relative',
		height: 150,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginBottom: 10,
	},
	details: {
		height: 75,
		flexDirection: 'row',
		marginTop: 10,
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 5,
	},
	realName: {
		width: 34,
		height: 13,
		position: 'absolute',
		top: 0,
		right: 2.5,
	},
	headshotBg: {
		position: 'relative',
		width: 75,
		height: 75,
		alignItems: 'center',
		backgroundColor: '#f4f7f9',
		borderRadius: 50,
	},
	publishIcon: {
		width: 70,
		height: 70,
		marginTop: 2.5,
	},
	capitalContainer: {
		marginLeft: 14.5,
	},
	name: {
		fontSize: 15,
		color: '#000',
		lineHeight: 20,
		height: 20,
		marginRight: 11,
	},
	time: {
		lineHeight: 17.5,
	},
	publishBtn: {
		position: 'absolute',
		top: 10,
		right: 15,
		width: 60,
		height: 25,
		backgroundColor: '#049bff',
		alignItems: "center",
		justifyContent: 'center',
		borderRadius: 50,
	},
	address: {
		height: 15,
		lineHeight: 15,
	},
	addressType: {
		height: 15,
		lineHeight: 15,
		marginLeft: 10,
	},
	capital: {
		flexDirection: 'row',
		alignItems: 'stretch',
		marginBottom: 5,
	},
	capitalLine: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	ammount: {
		fontSize: 18,
		color: '#388BED',
		height: 20,
		lineHeight: 20,
	},
	symbol: {
		fontSize: 13,
		color: '#388BED',
	},
	publishFont: {
		fontSize: 13,
		color: '#ccc',
	},
	noList: {
		flex: 1,
		fontSize: 13,
		color: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	asset: {
		height: 60,
		backgroundColor: '#f4f7f9',
		borderRadius: 10,
		borderTopRightRadius: 0,
		paddingTop: 10,
		elevation: 1.3,
	},
	assetLine: {
		flexDirection: 'row',
	},
	line: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginBottom: 10,
	},
	lineValue: {
		fontSize: 12,
		color: '#666',
	},
	assetIcon: {
		width: 12,
		height: 12,
		marginRight: 5,
	},
});

/* exports ================================================================== */
module.exports = PublishComponent;
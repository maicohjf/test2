"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class PublishComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.publish}>
					<View style={styles.details}>
						<View style={styles.headshotBg}>
							<Image
								source={require("./img/gerenzhongxin.png")}
								style={styles.publishIcon}
							/>
						</View>
						<Image
							source={require("./img/real-name-icon.png")}
							style={styles.realName}
						/>
						<View style={styles.capitalContainer}>
							<View style={styles.capital}>
								<Text style={styles.name}>李女士</Text>
								<Text style={[styles.publishFont, styles.time]}>03-08 09:46</Text>
								<View style={styles.publishBtn}>
									<Text style={{ fontSize: 13, color: '#fff' }}>抢单中</Text>
								</View>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.address, styles.publishFont]}>北京市</Text>
								<Text style={[styles.addressType, styles.publishFont]}>个体户</Text>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>0.8</Text>万元</Text>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>8</Text>个月还款</Text>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>12<Text style={styles.symbol}>%</Text></Text>年化率</Text>
							</View>
						</View>
					</View>
					<View style={styles.asset}>
						<View style={styles.assetLine}>
							{/* <View> */}
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />月收入0.5万元
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />无公积金
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有社保
							</Text>
							{/* </View> */}
						</View>
						<View style={styles.assetLine}>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />无信用卡
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有房产
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有车产
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.publish}>
					<View style={styles.details}>
						<View style={styles.headshotBg}>
							<Image
								source={require("./img/gerenzhongxin.png")}
								style={styles.publishIcon}
							/>
						</View>
						<Image
							source={require("./img/real-name-icon.png")}
							style={styles.realName}
						/>
						<View style={styles.capitalContainer}>
							<View style={styles.capital}>
								<Text style={styles.name}>李女士</Text>
								<Text style={[styles.publishFont, styles.time]}>03-08 09:46</Text>
								<View style={styles.publishBtn}>
									<Text style={{ fontSize: 13, color: '#fff' }}>抢单中</Text>
								</View>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.address, styles.publishFont]}>北京市</Text>
								<Text style={[styles.addressType, styles.publishFont]}>个体户</Text>
							</View>
							<View style={styles.capital}>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>0.8</Text>万元</Text>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>8</Text>个月还款</Text>
								<Text style={[styles.nuit, styles.publishFont]}><Text style={styles.ammount}>12<Text style={styles.symbol}>%</Text></Text>年化率</Text>
							</View>
						</View>
					</View>
					<View style={styles.asset}>
						<View style={styles.assetLine}>
							{/* <View> */}
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />月收入0.5万元
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />无公积金
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有社保
							</Text>
							{/* </View> */}
						</View>
						<View style={styles.assetLine}>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />无信用卡
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有房产
							</Text>
							<Text style={styles.line}>
								<Image source={require("./img/wodefabu-icon.png")} style={styles.assetIcon} />有车产
							</Text>
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
	},
	publish: {
		// height: 150,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginBottom: 10,
	},
	details: {
		// height: 90,
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5,
		marginBottom: 5,
	},
	realName: {
		width: 34,
		height: 13,
		position: 'absolute',
		top: 11,
		left: 52,
	},
	headshotBg: {
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
		top: 0,
		right: -20,
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
		// borderWidth: 1,
		// borderColor: '#000',
	},
	ammount: {
		fontSize: 18,
		color: '#388BED',
		height: 20,
		lineHeight: 20,
	},
	symbol: {
		fontSize: 13,
	},
	nuit: {
		marginRight: 15,
		lineHeight: 18.5,
		height: 18.5,
		alignItems: 'center',
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
		backgroundColor: '#f4f7f9',
		borderRadius: 10,
		borderTopRightRadius: 0,
		paddingTop: 10,
		// box
	},
	assetLine: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	line: {
		flex: 1,
		marginLeft: 15,
		marginBottom: 10,
	},
	assetIcon: {
		width: 24,
		height: 24,
	},
});

/* exports ================================================================== */
module.exports = PublishComponent;
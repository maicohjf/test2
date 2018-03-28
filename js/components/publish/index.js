"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class PublishComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.publish}>
					<Image
						source={require("./img/gerenzhongxin.png")}
						style={styles.publishIcon}
					/>
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
					<View style={styles.user}>
						<View style={styles.user}>
						
						</View>
					</View>
				</View>
				<View style={styles.publish}>
					<Image
						source={require("./img/gerenzhongxin.png")}
						style={styles.publishIcon}
					/>
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
	},
	publish: {
		position: 'relative',
		margin: 10,
		paddingTop: 10,
		paddingBottom: 5,
		paddingRight: 15,
		paddingLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	realName: {
		width: 34,
		height: 13,
		position: 'absolute',
		top: 11.5,
		left: 52,
	},
	publishIcon: {
		width: 70,
		height: 70,
		// borderWidth: 1,
		// borderColor: '#000',
	},
	capitalContainer: {
		marginLeft: 14.5,
	},
	name: {
		fontSize: 15,
		color: '#000',
		lineHeight: 20,
		height: 20,
	},
	time: {
		lineHeight: 15,
		marginLeft: 11.5,
		width: 110,
		marginRight: 15,
	},
	publishBtn: {
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
		marginTop: 5,
		marginBottom: 5,
	},
	addressType: {
		height: 15,
		lineHeight: 15,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
	},
	capital: {
		flex: 1,
		flexDirection: 'row',
	},
	ammount: {
		fontSize: 18,
		color: '#388BED',
	},
	symbol: {
		fontSize: 13,
	},
	nuit: {
		marginRight: 15,
		lineHeight: 20,
		height: 20,
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
	}
});

/* exports ================================================================== */
module.exports = PublishComponent;
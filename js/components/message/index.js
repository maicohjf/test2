"use strict";

import React from "react";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";

class ProfileComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.message}>
					<Image
						source={require("./img/activity-1-3x.png")}
						style={styles.messageIcon}
					/>
					<View style={styles.reward}>
						<Text style={styles.rewardType}>首购奖励</Text>
						<Text style={styles.rewardContent}>+1次数券</Text>
						<Text style={styles.rewardTime}>02-16 16:42</Text>
					</View>
				</View>
				<View style={styles.message}>
						<Image
							source={require("./img/activity-2-3x.png")}
							style={styles.messageIcon}
						/>
					<View style={styles.reward}>
						<Text style={styles.rewardType}>首购奖励</Text>
						<Text style={styles.rewardContent}>+1次数券</Text>
						<Text style={styles.rewardTime}>02-16 16:42</Text>
					</View>
				</View>
			</View>
		);
	}
}

ProfileComponent.navigationOptions = {
	title: 'Profile Screen',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	message: {
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 15,
		paddingLeft: 17.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
	},
	messageIcon: {
		width: 56,
		height: 56,
	},
	reward: {
		marginLeft: 21.5,
	},
	rewardType: {
		fontSize: 15,
		color: '#000',
		lineHeight: 25,
		height: 25,
	},
	rewardContent: {
		fontSize: 13,
		color: '#388BED',
		lineHeight: 23,
		height: 25,
	},
	rewardTime: {
		fontSize: 13,
		color: '#ccc',
		lineHeight: 25,
		height: 25,
	},
});

/* exports ================================================================== */
module.exports = ProfileComponent;
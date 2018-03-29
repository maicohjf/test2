"use strict";

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, PixelRatio, ListView, RecyclerViewBackedScrollView, RefreshControl} from "react-native";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import ContractListItem from './listItem';

const items = [1, 2, 3];
export default class ContractListComponent extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.rowData = Array.from(new Array(2)).map(
      (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
    this.state = {
      isRefreshing: false,
      dataSource: this.ds.cloneWithRows(this.rowData),
    };
  }

  routeToDetail() {
    this.props.navigation.navigate('ContractDetail');
  }

  renderRow() {
    return (
    <View>
      <ContractListItem onDetail={() => {this.props.navigation.navigate('ContractDetail')}} />
    </View>
    );
  }

  renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      const rowData = Array.from(new Array(2))
      .map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.rowData);
      this.rowData = rowData;
      console.log(rowData);
      this.setState({
        isRefreshing: false,
        dataSource: this.ds.cloneWithRows(rowData),
      });
    }, 5000);
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.contractListContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={() => this.renderRow()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => { this.onRefresh() }}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
        />
      </View>
    );
  }
}


/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  contractListContainer: {
    flex: 1,
    margin: 10,
  }
});

/* exports ================================================================== */
module.exports = ContractListComponent;
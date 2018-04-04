/**
 * Created by phr on 4/3/18.
 */
"use strict";

import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {View, Image, Text, StyleSheet, PixelRatio, TouchableOpacity } from 'react-native';
import {Button} from 'antd-mobile';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

class investListComponent extends React.PureComponent {

  render() {
    const {index, item} = this.props;
    console.log('hhhhhhh', index, item)
    return (
        <LinearGradient colors={[colors.startColor, index === 0 ? colors.endColor : colors.startColor]}
                        startPoint={{x: 1, y: 0}}
                        endPoint={{x: 0, y: 1}}
                        style={{marginTop: 10}}>
          <View style={styles.item}>
            <View>
              <Image
                style={styles.icon}
                source={require('./img/touxiang.png')}
              >
              </Image>
              <View style={ item.id === '3'? styles.realnameclo : styles.realname }>
                <Text style={ item.id === '3' ? styles.realnametextclo : styles.realnametext }>已实名</Text>
              </View>
            </View>
            <View style={styles.itemCenter}>
              <Text style={styles.name}>洪先生</Text>
              {index===0 ? <Text style={styles.nameinfo}>他是您的潜在投资人</Text> : <Text style={styles.nametime}>最近投资时间：02-09</Text>}
            </View>
            {item.id === '3' ? 
                <View style={styles.seeInfoclo}>
                  <Text style={styles.seeInfotextclo}>已关闭</Text>
                </View>   
                : <View style={styles.seeInfo} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Investorinfo')}>
                      <Text style={styles.seeInfotext} >查看资料</Text>
                    </TouchableOpacity>  
                  </View>
                    
            }
                  
                
              
              
            
          </View>
        </LinearGradient>
    );
  }
}

const colors = {
  startColor: "#FFFFFF",
  endColor: "#F6FAFD"
};


/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
    item: {
      marginTop: 10,
      height: 80,
      // backgroundColor: '#fff',
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
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(withNavigation(investListComponent));
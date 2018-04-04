"use strict";

import React from "react";
import { connect } from 'react-redux';
import { TouchableOpacity, Dimensions, View, Image, Text, StyleSheet,ScrollView,TouchableHighlight } from "react-native";
import { withNavigation } from 'react-navigation';

class ProfileComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
       <ScrollView style={{flex: 1,paddingBottom:10,}}>
         <View style={{height: 174,backgroundColor: '#fff',alignItems: 'stretch',paddingBottom: 10}}>
          <View style={{height:60,alignItems: 'stretch',flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>alert('上传头像')}>
                <Image style={{height:60,width: 60,marginLeft: 15,backgroundColor: '#f00',borderRadius: 30}}
                   source={require('./img/default_avatar.png')} />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
               <Text style={{fontSize: 18,fontWeight: 'bold',color: '#222',marginTop: 2,marginLeft: 15}}>点击登录</Text>
               <Text style={{fontSize: 13,color: '#999',marginTop: 7,marginLeft: 15}}>1秒登录，额度高，权益多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 55,alignItems:'flex-end',flexDirection:'row'}}>
              <Text style={{marginLeft: 15,marginBottom: 0,fontSize:16,color:'#666'}}>查看券:</Text>
              <Text style={{fontSize:36,color:'#222',marginLeft:15,fontWeight:'bold'}}>0</Text>
              <Text style={{fontSize:24,color:'#222',marginLeft:0,fontWeight:'bold'}}>张</Text>
              <TouchableHighlight onPress={()=>alert('去购买')} 
              style={{borderRadius: 12.5,width: 60,height:25,backgroundColor: '#049bff',
                      position: 'absolute',bottom:0,right:25,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize: 13,color: '#fff'}}>购买</Text>
              </TouchableHighlight>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems: 'center'}}>
            <View style={{flex:1,flexDirection: 'row'}}>
              <Image style={{marginLeft: 15 }} source={require('./img/shiyingmingxi-icon.png')} />
              <Text style={{fontSize: 13,color:'#222',marginLeft:10}}>使用明细</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Image style={{marginLeft: 15 }} source={require('./img/goumaijilu-icon.png')} />
              <Text style={{fontSize: 13,color:'#222',marginLeft:10}}>购买记录</Text>
            </View>
            <View style={{flex:1}}>
              <Text></Text>
            </View>
          </View>
         </View>
         <View style={{height: 144,backgroundColor: '#e5e5e5',alignItems: 'stretch',paddingTop:0,marginBottom: 10}}>
          <View style={styles.section}>
            <Text style={styles.secTitle}>我是借款人</Text>
          </View>
          <View style={styles.trContainer}>
            <TouchableOpacity style={styles.trItem} onPress={() => this.props.navigation.navigate('Publish')}>
              <Image style={styles.itemImg} source={require('./img/jk-wodefabu-icon.png')} />
              <Text>我的发布</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trItem} onPress={()=>alert('去我的购买')}>
              <Image style={styles.itemImg} source={require('./img/jk-wodegoumai-icon.png')} />
              <Text>我的购买</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trItem} onPress={() => this.props.navigation.navigate('Contract')}>
              <Image style={styles.itemImg} source={require('./img/jk-wodehetong-icon.png')} />
              <Text>我的合同</Text>
            </TouchableOpacity>
          </View>
         </View>

         <View style={{height: 144, backgroundColor: '#e5e5e5',alignItems: 'stretch'}}>
          <View style={styles.section}>
            <Text style={styles.secTitle}>我是投资人</Text>
          </View>
          <View style={styles.trContainer}>
            <TouchableOpacity style={styles.trItem} onPress={()=>alert('去借款人投递')}>
              <Image style={styles.itemImg} source={require('./img/tz-jrtoudi-icon.png')} />
              <Text>借款人投递</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trItem} onPress={()=>alert('去我是投资人的购买')}>
              <Image style={styles.itemImg} source={require('./img/tz-wodegoumai-icon.png')} />
              <Text>我的购买</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trItem} onPress={() => this.props.navigation.navigate('Contract')}>
              <Image style={styles.itemImg} source={require('./img/tz-wodehrtong-icon.png')} />
              <Text style={styles.itemTitle}>我的合同</Text>
            </TouchableOpacity>
          </View>
         </View>
         <TouchableOpacity style={styles.bottItem} onPress={()=>alert('去我的银行卡')}>
           <Text style={{fontSize: 15,color: '#666'}}>我的银行卡</Text>
           <Image  source={require('./img/arrownext_icon.png')}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottItem} onPress={()=>alert('去邀请好友')}>
           <Text style={{fontSize: 15,color: '#666'}}>邀请好友拿现金红包</Text>
           <View style={{height:44,width:60,marginTop:0,marginRight:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Image source={require('./img/Redenvelopes-icon.png')}/>
              <Image source={require('./img/arrownext_icon.png')}/>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottItem}onPress={()=>alert('去关于我们')}>
           <Text style={{fontSize: 15,color: '#666'}}>关于我们</Text>
           <Image  source={require('./img/arrownext_icon.png')}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottItem} onPress={() => this.props.navigation.navigate('Setting')}>
           <Text style={{fontSize: 15,color: '#666'}}>设置</Text>
           <Image  source={require('./img/arrownext_icon.png')}/>
         </TouchableOpacity>
        </ScrollView>

    );
  }
}

ProfileComponent.navigationOptions = {
  title: '个人中心',
};

/* StyleSheet =============================================================== */

const styles = StyleSheet.create({
  section:{
    alignItems:'stretch',
    height: 44,
    justifyContent:'center',
    backgroundColor: '#fff'
  },
  secTitle:{
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  trContainer:{
    height:99,
    marginTop:1,
    flexDirection:'row',
    backgroundColor:'#e5e5e5'
  },
  trItem:{
    flex:1,
    marginLeft:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  itemImg:{
    marginTop: 20,
    marginBottom:15,
    width: 30,
    height: 30,
  },
  itemTitle:{
    marginTop:15,
    bottom: 15
  },
  bottItem:{
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: 44,
    backgroundColor: '#fff',
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

/* exports ================================================================== */
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(withNavigation(ProfileComponent));
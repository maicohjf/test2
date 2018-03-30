/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

export default class App extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        var data = [{key:'中国银行'},{key:'建设银行'},
            {key:'建设银行1'},{key:'建设银行2'},{key:'建设银行3'},
            {key:'建设银行4'},{key:'建设银行12'},{key:'建设银行75'},
            {key:'建设银行11'},{key:'建设银行23'},{key:'建设银行56'},
            {key:'建设银行54'},{key:'建设银行43'},{key:'建设银行34'}];
        return (<View>
            {/**/}
            <FlatList extraData={this.state}
                      ItemSeparatorComponent={()=><View style={{marginLeft:15,flex:1,backgroundColor:'red',height:0.5,}} />}
                      data={data}
                      renderItem={({item}) =>{
                return (
                <TouchableOpacity onPress={()=>Alert.alert(item.key+"",item.id+"==",[{title:'取消'}])}>
                    <View  id={item.id} key={item.id}  style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={{width:25,height:25,marginLeft:15}} source={require('../img/icon_catalog.png')}/>
                    <Text style={{marginLeft:21,height:60,lineHeight:60}}>{item.key}</Text>
                </View>
                </TouchableOpacity>);
            } }  />


        </View>);
    };

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
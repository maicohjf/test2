/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    PixelRatio,
    Dimensions,
    Button,
    Text,
    StyleSheet,
} from 'react-native';
import IButton from '../common/IButton';
const {width, height} = Dimensions.get('window');

export default class App extends Component<{}> {

    render() {
        return (<View style={styles.container}>
            <Image source={require('../img/portrait.png')} resizeMode={'center'}
                   style={{width:155,height:120,marginTop:126,}}/>
            <Text style={{color:'#000000',fontSize:16,width:width,lineHeight:24,fontWeight:'bold',textAlign:'center'}}>恭喜您，认证成功</Text>
            <Text style={{color:'#388BED',marginTop:5,fontSize:15,lineHeight:21,textAlign:'center',marginRight:41.5,marginLeft:41.5}}>立即发布借款吧，保持电话畅通，投资人会很快来联系您！</Text>

            <IButton title="确认发布"/>
        </View>);
    };

}

let styles = StyleSheet.create({
    container: {
       alignItems:'center',

    },
});
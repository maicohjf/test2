/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    Modal,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends Component<{}> {

    constructor(props){
        super(props);
        this.state ={
            filldataVisible:false,
            transparent: true,
        };
    }

    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        return (<View style={styles.container}>
            <Image style={{width: width, height: 4,}} source={require('../img/progressbar1_3.png')}/>
            <Image style={{width:175,height:200,marginTop:25,}} source={require('../img/portrait.png')}/>
            <Text style={{color:'#666666',marginTop:26.5,fontWeight:'bold',fontSize:13,lineHeight:25,height:25,}}>请将摄像头对准您的脸，按照提示操作</Text>
            <Text style={{lineHeight:25,marginTop:5.5,color:'#666666',fontSize:13,}}>
                1.不要戴着帽子{"\n"}
                2.动作不要太快{"\n"}
                3.光线不要太暗
            </Text>
            <TouchableHighlight  style={styles.btnView} underlayColor={"#a5a5a5"} onPress={()=>this.setState({filldataVisible:true})}>
                <View style={styles.btnWidth}>
                <Image resizeMode={'center'} style={{width:25,height:25,}} source={require('../img/icon_camera_2.png')}/>
                <Text style={{color:'#FFFFFF',fontSize:15,marginLeft:9,}}>开始认证</Text>
                </View>
            </TouchableHighlight>

            <Modal
                animationType={'fade'}
                transparent={this.state.transparent}
                visible={this.state.filldataVisible}
                onRequestClose={() => this._setModalVisible(false)}>
                <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                }]}>
                    <View style={[{alignItems:'center',width: 270, height: 126,
                        backgroundColor: '#F6F6F6',borderRadius:8}]}>
                        <Text style={{lineHeight:21,fontSize:15,marginTop:20,
                            color:'#000000',fontWeight:'bold'}}>提示</Text>
                        <Text style={{marginLeft:15,marginRight:15,
                            lineHeight:21,fontSize:15,color:'#000000'}}>请按照指定提示重新人脸识别吧！</Text>
                        <TouchableHighlight underlayColor={"#dddddd"}
                                            onPress={()=>this._setModalVisible(false)}
                                            style={{width: 270,height:44,borderTopWidth:0.25,
                                                borderTopColor:'#dddddd',position:'absolute',
                                                bottom:0,borderBottomRightRadius:8,borderBottomLeftRadius:8}}>

                        <Text style={{width: 270,height:44,color:'#388BED',
                            fontSize:15,lineHeight:44,textAlign:'center',}}>知道了</Text>

                        </TouchableHighlight>

                    </View>
                </View>

            </Modal>

        </View>);
    };
    _setModalVisible(visible) {
        this.setState({filldataVisible: visible});
    }

}

let styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'white',

    },
    btnView:{
        marginLeft: 28,
        marginRight: 28,
        marginTop: 45,
        width: (width - 56),
        height: 44,
        borderRadius:50,
        backgroundColor: '#049BFF',
    },
    btnWidth: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
    },
    idCardImgViewRight: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
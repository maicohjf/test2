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
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';
import EditInput from '../common/EidtInput';
import IButton from '../common/IButton';
import SingleDialog from '../common/SingleDialog';
const {width, height} = Dimensions.get('window');

export default class App extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            idcard: '',
            idCardValue:'',
            transparent:true,
            fundVisible:false,
        };
    }

    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        return (<View style={{flex:1}}>
            <Image style={{width: width, height: 4,}} source={require('../img/progress_bar2.3.png')}/>
            <View style={styles.hintView}>
                <Image style={styles.hintImage}
                       source={require('./../img/icon_explain_blue.png')}/>
                <Text style={styles.hintText}>请绑定持卡人本人的银行卡</Text>
            </View>
            <EditInput addIconClick={()=>console.log("tests")} title="持卡人" hintTitle="张小月" titleMarginRight={30}/>
            <EditInput addIconClick={()=>console.log("tests")} title="银行卡号"
                       hintTitle="请输入储蓄卡卡号"
                       titleMarginRight={15}
                       icon={require("../img/icon_camera.png")}
                       iconHeight={16} iconWidth={20}/>

            <View style={[styles.contactRow, {justifyContent: 'center',backgroundColor:'white',}]}>
                <Image source={require('../img/icon_catalog.png')} style={{width:25,height:25,marginRight:15,}}/>
                <Text style={styles.cardNameTxt}>建设银行 储蓄卡</Text>
            </View>
            <IButton onClick={() => this.props.navigation.navigate('BindingPhone')}  title="下一步"/>

            <View style={[styles.contactRow, styles.clientTxtMargin]}>
                <Text style={styles.clientTxt}>如有疑问，您可</Text>
                <Text style={styles.clientTxt}>联系客服</Text>
            </View>

            <Modal
                animationType={'fade'}
                transparent={this.state.transparent}
                visible={this.state.fundVisible}
                onRequestClose={() => this._setModalVisible(false)}>
                <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                }]}>
                    <View style={[{alignItems:'center',width: 270, height: 168,
                        backgroundColor: '#F6F6F6',borderRadius:8}]}>
                        <Text style={{lineHeight:21,fontSize:15,marginTop:20,
                            color:'#000000',fontWeight:'bold'}}>提示</Text>
                        <Text style={{marginLeft:15,marginRight:15,textAlign:'center',
                            lineHeight:21,fontSize:15,color:'#000000'}}>为保证资金安全，{"\n"}
                            只能绑定认证用户本人的银行卡，{"\n"}
                            当前仅支持中国大陆用户。</Text>
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
    handleClearIdCard() {
        this.setState({
            idcard: '',
        });
    }
    showModal() {
        var a = this.state.fundVisible
        this.setState({fundVisible: !a});
    }
    _setModalVisible(visible) {
        this.setState({fundVisible: visible});
    }



}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hintView: {
        height: 44,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    hintImage: {
        width: 14,
        height: 14,
        marginLeft: 15,
    },
    hintText: {
        color: '#999999',
        fontSize: 13,
        marginLeft: 15,

    },
    cardNameView:{
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:'white',
        paddingRight:15,
    },
    cameraIcon: {
        width: 20,
        height: 16,
    },
    btnWidth: {
        height: 44,
        marginLeft: 28,
        marginRight: 28,
        marginTop: 40,
        width: (width - 56),
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#DADADA',
        borderRadius:50,
    },
    bottomBorderLine:{
        borderBottomWidth: 0.5,
        borderBottomColor: "#e5e5e5"
    },
    btnColor: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    contactRow: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    clientTxtMargin: {
        marginTop: 10,
        justifyContent: 'center',
    },
    clientTxt: {
        color: '#388BED',
        fontSize: 13,
        height: 19,
        lineHeight:19,
    },
    cardNameTxt: {
        color: '#666666',
        fontSize: 16,
        height: 50,
        lineHeight:50,
    },
    idCardImgViewRight: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
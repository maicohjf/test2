/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Modal,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';
import IButton from '../common/IButton';
import EditInput from '../common/EidtInput';
const {width, height} = Dimensions.get('window');



export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.handleIdCardChange = this.handleIdCardChange.bind(this);
        this.state = {
            name: '',
            idcard: '',
            filldataVisible: false,
            idCardVisible: false,
            transparent: true,
        }

    }

    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        return (<View>
            <Image style={{width: width, height: 4,}} source={require('../img/progressbar1_3.png')}/>
            <View style={styles.hintView}>
                <Image style={styles.hintImage}
                       source={require('./../img/icon_explain_blue.png')}/>
                <Text style={styles.hintText}>请确保身份证和登录手机号码实名一致</Text>
            </View>

            <View style={styles.idCardView}>
                {/*正面身份证*/}
                <View style={styles.idCardFront}>
                    <View style={styles.idCardFrontTxt}>
                        <Text style={styles.idCardTxtOne}>身份证</Text>
                        <Text style={styles.idCardTxtTwo}>姓名面</Text>
                    </View>
                    <View style={[styles.idCardImgView, styles.idCardImageViewWH]}>
                        <Image ref="frontImg" style={[styles.idCardImgSize, {display: 'none'}]}
                               source={require('../img/icon_Idname.png')}/>
                        <Image style={[styles.idCardImageViewWH, styles.shootIdCardImg]}
                               source={require('../img/icon_id_name_2.png')}/>
                        <Image style={[styles.canShootImg]} source={require('../img/icon_shot.png')}/>
                        <Text style={styles.canShootTxt}>可重拍</Text>
                    </View>
                </View>
                {/*反面身份证*/}
                <View style={styles.idCardBack}>
                    <View style={styles.idCardFrontTxt}>
                        <Text style={styles.idCardTxtOne}>身份证</Text>
                        <Text style={styles.idCardTxtTwo}>国徽面</Text>
                    </View>
                    <View style={[styles.idCardImgView, styles.idCardImageViewWH]}>
                        <Image ref="backImg" style={[styles.idCardImgSize, {display: 'none'}]}
                               source={require('../img/icon_Idname.png')}/>
                        <Image style={[styles.idCardImageViewWH, styles.shootIdCardImg]}
                               source={require('../img/icon_id_name_2.png')}/>
                        <Image style={[styles.canShootImg]} source={require('../img/icon_shot.png')}/>
                        <Text style={styles.canShootTxt}>可重拍</Text>
                    </View>
                </View>
            </View>

            {/*输入姓名和身份证号码*/}
            <EditInput addIconClick={()=>console.log("tests")}
                       title="真实姓名" hintTitle="输入真实姓名" titleMarginRight={15}
                       icon={require('../img/icon_delete.png')} iconWidth={15} iconHeight={15}/>
            <EditInput addIconClick={()=>console.log("tests")}
                       title="身份证号" hintTitle="输入身份证号码" titleMarginRight={15}
                       icon={require('../img/icon_delete.png')} iconWidth={15} iconHeight={15}/>


            <View style={[styles.nameRow, styles.backgroundWhite, styles.nameMarginTop]}>
                <Text style={styles.nameinputTxt}>拍摄人脸</Text>
                <Text
                    style={[styles.nameShoot, styles.nameShootIcon]}
                >前往拍摄</Text>
                <Image style={[styles.smallIcon, styles.backIcon]} source={require('../img/arrownext_icon.png')}/>

            </View>


            <IButton title={'确认无误并提交'} onClick={()=>this.props.navigation.navigate('FaceRecognition')} />


            <View style={[styles.nameRow, styles.yingsiTxtMargin]}>
                <Image style={styles.smallIcon} source={require('../img/yingsi_icon.png')}/>
                <Text style={styles.yingsiTxt}>隐私信息严格加密保护</Text>

            </View>

            <View>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.filldataVisible}
                    onRequestClose={() => this._setModalVisible(false)}>
                    <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                        }]}>
                        <View style={[ {},{alignItems:'center',width: 270, height: 147,
                            backgroundColor: '#F6F6F6',borderRadius:8}]}>
                            <Text style={{lineHeight:21,fontSize:15,marginTop:20,
                                color:'#000000',fontWeight:'bold'}}>提示</Text>
                            <Text style={{marginLeft:15,marginRight:15,
                                lineHeight:21,fontSize:15,color:'#000000'}}>资料尚未填写完整，{"\n"}
                                是否放弃编辑并返回？</Text>
                            <View style={[{flexDirection: 'row',borderTopWidth:0.25,borderTopColor:'#eeeeee',position:'absolute',bottom:0,borderBottomRightRadius:8,borderBottomLeftRadius:8}, styles.idCardImgViewRight]}>
                                <Text onPress={()=>this._setModalVisible(false)} style={{flex: 1,height:44,color:'#999999',fontSize:15,lineHeight:44,textAlign:'center',}}>返回</Text>
                                <View style={{height:44,width:0.5,backgroundColor:'#eeeeee'}}/>
                                <Text style={{flex: 1,lineHeight:44,color:'#388BED',fontSize:15,textAlign:'center'}}>继续编辑</Text>
                            </View>
                        </View>
                    </View>

                </Modal>

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.idCardVisible}
                    onRequestClose={() => this._setidCardVisible(false)}>
                    <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                    }]}>
                        <View style={[ {},{alignItems:'center',width: 270, height: 155,
                            backgroundColor: '#F6F6F6',borderRadius:8}]}>
                            <Text style={{lineHeight:21,fontSize:13,marginTop:20,
                                color:'#222222',}}>请核对身份信息无误，确认后无法修改</Text>
                            <Text style={{lineHeight:21,fontSize:15,
                                color:'#000000',fontWeight:'bold'}}>请核对身份信息无误，确认后无法修改</Text>
                            <Text style={{marginLeft:15,marginRight:15,marginTop:6,
                                lineHeight:21,fontSize:15,color:'#666666'}}>421627 1990 1129 3028</Text>

                            <View style={[{flexDirection: 'row',borderTopWidth:0.25,borderTopColor:'#eeeeee',position:'absolute',bottom:0,borderBottomRightRadius:8,borderBottomLeftRadius:8}, styles.idCardImgViewRight]}>
                                <Text onPress={()=>this._setidCardVisible(false)} style={{flex: 1,height:44,color:'#999999',fontSize:15,lineHeight:44,textAlign:'center',}}>取消</Text>
                                <View style={{height:44,width:0.5,backgroundColor:'#eeeeee'}}/>
                                <Text style={{flex: 1,lineHeight:44,color:'#388BED',fontSize:15,textAlign:'center'}}>确认</Text>
                            </View>
                        </View>
                    </View>

                </Modal>

            </View>

        </View>);
    };

    handleIdCardChange(text) {
        console.log("test1s", text);
        let formatedPhone = text.replace(/\s+/g, '');
        const re = /^1\d{0,10}$/;
        const prePhone = this.state.idcard;
        console.log("tests", prePhone + "==11", formatedPhone + "==ii");
        // if (formatedPhone == prePhone || !re.test(formatedPhone)) {
        if (formatedPhone == prePhone) {
            formatedPhone = prePhone;
        }
        console.log("tests", formatedPhone);
        this.setState({
            idcard: formatedPhone,
        });
    }

    setModalVisible(visible) {
        this.setState({filldataVisible: visible});
    }

    formatIdCard(idcard) {
        let value = idcard;
        if (idcard && idcard.length > 7) {
            value = `${idcard.substring(0, 3)} ${idcard.substring(3, 7)} ${idcard.substring(7, idcard.length)}`;
        } else if (idcard && idcard.length > 3 && idcard.length <= 7) {
            value = `${idcard.substring(0, 3)} ${idcard.substring(3, idcard.length)}`;
        }
        // console.log(value);
        return value;
    }

    handleClearName() {
        this.setState({
            name: '',
        });
    }

    handleClearIdCard() {
        this.setState({
            idcard: '',
        });
    }

    showModal() {
        var a = this.state.filldataVisible
        this.setState({filldataVisible: !a});
    }

    _setModalVisible(visible) {
        this.setState({filldataVisible: visible});
    }
    _setidCardVisible(visible) {
        this.setState({idCardVisible: visible});
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
    idCardView: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingBottom: 10
    },
    idCardFront: {
        flex: 1,
        marginLeft: 15,

    },
    idCardBack: {
        flex: 1,
        marginLeft: 13,
    },
    idCardPosition: {
        position: 'relative',
    },
    idCardFrontTxt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    idCardTxtOne: {
        height: 25,
        lineHeight: 25,
        color: '#999999',
        fontSize: 15
    },
    idCardTxtTwo: {
        height: 25,
        lineHeight: 25,
        color: '#388BED',
        fontSize: 15
    },
    idCardImageViewWH: {
        height: 105,
        width: (width / 2) - 28,
    },
    idCardImgView: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    idCardImgViewRight: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    idCardImgSize: {
        width: 60,
        height: 60,
    },
    backgroundWhite: {
        backgroundColor: '#ffffff'
    },
    nameRow: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    nameBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5"
    },
    nameMarginTop: {
        marginTop: 10,
    },
    nameinputTxt: {
        lineHeight: 21,
        height: 21,
        marginLeft: 15,
        marginRight: 15,
        color: '#666666',
        fontSize: 15,
    },
    nameInput: {
        height: 44,
        borderWidth: 0,
        fontSize: 15,
    },
    nameInputWidth: {
        width: 270,
    },
    nameShootIcon: {
        flex: 1,
    },
    deleteIcon: {
        width: 15,
        height: 15,
    },
    smallIcon: {
        height: 20,
        width: 20,
    },
    backIcon: {
        marginRight: 15,
    },
    nameShoot: {
        lineHeight: 44,
        height: 44,
        borderWidth: 0,
        fontSize: 15,
        color: '#CCCCCC',
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
    btnColor: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    yingsiTxt: {
        color: '#388BED',
        fontSize: 13,
        marginLeft: 5,
        height: 19,
        lineHeight:19,
    },
    yingsiTxtMargin: {
        marginTop: 11,
        justifyContent: 'center',
    },
    shootIdCardImg: {
        position: "relative",
        top: 0,
        borderRadius: 4,
    },
    canShootImg: {
        width: 50,
        height: 20,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    canShootTxt: {
        fontSize: 13,
        color: '#ffffff',
        position: 'absolute',
        bottom: 5,

    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },


});
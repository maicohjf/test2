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
    TextInput,
    StyleSheet,
} from 'react-native';
import EditText from '../common/EidtInput';
import IButton from '../common/IButton';
import SingleDialog from '../common/SingleDialog';
const {width, height} = Dimensions.get('window');


export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            dialogVisible:true,
        };
    }

    render() {
        return (<View>
            <Image style={{width: width, height: 4,}} source={require('../img/progress_bar2.3.png')}/>
            <View style={[styles.contactRow, {justifyContent: 'center', marginTop: 6.5}]}>
                <Image source={require('../img/icon_catalog.png')} style={{width: 25, height: 25, marginRight: 15,}}/>
                <Text style={styles.cardNameTxt}>建设银行 储蓄卡</Text>
            </View>

            <EditText addIconClick={() => console.log("tests")}
                      hintTitle={'请输入银行预留手机号'}
                      title={'预留手机号'}
                      titleMarginRight={11}
                      iconHeight={14}
                      iconWidth={14}
                      icon={require('../img/icon_explain_blue.png')}

            />
            <EditText addIconClick={() => console.log("tests")}
                      hintTitle={'请输入验证码'}
                      title={'验证码'} titleMarginRight={11}

            />

            <IButton title={'确定'} onClick={() => this.showDialog()}/>

            <View style={[styles.contactRow, styles.clientTxtMargin]}>
                <Text style={styles.clientTxt}>如有疑问，您可</Text>
                <Text style={styles.clientTxt}>联系客服</Text>
            </View>
            <SingleDialog visible={this.state.dialogVisible} title="提示"
                          message="银行预留手机号是办理银行卡时所填写的手机号码。"
                          height={147} btnTitle="知道了" />

        </View>);
    };

    showDialog() {

       this.setState({
           dialogVisible:true,
       });
    }

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contactRow: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    cardNameTxt: {
        color: '#666666',
        fontSize: 16,
        height: 60,
        lineHeight: 60,
    },
    clientTxtMargin: {
        marginTop: 10,
        justifyContent: 'center',
    },
    nameRow: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    backgroundWhite: {
        backgroundColor: '#ffffff'
    },
    nameInputTxt: {
        lineHeight: 21,
        height: 21,
        marginLeft: 15,
        marginRight: 15,
        color: '#666666',
        fontSize: 15,
    },
    clientTxt: {
        color: '#388BED',
        fontSize: 13,
        height: 19,
        lineHeight:19,
    },
});
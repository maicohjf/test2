/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Picker,
    Dimensions,
    StyleSheet,
} from 'react-native';
import EditInput from '../common/EidtInput';
import IButton from '../common/IButton';
const {width, height} = Dimensions.get('window');

export default class index extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            language:0,
        };
    }
    render() {
        return (<View>
            <Image style={{width: width, height: 4,}} source={require('../img/progress_bar3_3.png')}/>
           <EditInput style={styles.editMargin} addIconClick={()=>console.log("等到")} title="与本人关系"
                      hintTitle="请选择" titleMarginRight={16}/>
            <EditInput addIconClick={()=>console.log("等到")} title="手机号"
                       hintTitle="请选择手机联系人" titleMarginRight={46}/>
            <EditInput style={{marginTop:10}}  addIconClick={()=>console.log("等到")} title="与本人关系"
                       hintTitle="请选择" titleMarginRight={16}/>
            <EditInput addIconClick={()=>console.log("等到")} title="手机号"
                       hintTitle="请选择手机联系人" titleMarginRight={46}/>

            <IButton title={'确定'} onClick={() => this.showDialog()}/>

            <View style={[styles.contactRow, styles.clientTxtMargin]}>
                <Text style={styles.clientTxt}>如有疑问，您可</Text>
                <Text style={styles.clientTxt}>联系客服</Text>
            </View>
            <Picker
                selectedValue={this.state.language} mode={'dropdown'}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript1" value="js1" />
                <Picker.Item label="JavaScript2" value="js2" />
                <Picker.Item label="JavaScript3" value="js3" />
            </Picker>
        </View>);
    };

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
    clientTxt: {
        color: '#388BED',
        fontSize: 13,
        height: 19,
        lineHeight:19,
    },
    clientTxtMargin: {
        marginTop: 10,
        justifyContent: 'center',
    },
    editMargin:{
        marginTop:10
    }
});
/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Modal,
    Text,
    PixelRatio,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';
const {width} = Dimensions.get('window');

export default class SingleDialog extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            transparent:true,
            singleDataVisible:this.props.visible,
        }

    }

    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        console.log("高度=",this.props.height);
        return (<View>
            <Modal
                animationType={'fade'}
                transparent={this.state.transparent}
                visible={this.state.singleDataVisible}
                onRequestClose={() => this._setSingleModalVisible(false)}>
                <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                }]}>
                    <View style={[{alignItems:'center',width: 270, height: 147,
                        backgroundColor: '#F6F6F6',borderRadius:8}]}>
                        <Text style={{lineHeight:21,fontSize:15,marginTop:20,
                            color:'#000000',fontWeight:'bold'}}>{this.props.title}</Text>
                        <Text style={{marginLeft:15,marginRight:15,
                            lineHeight:21,fontSize:15,color:'#000000',textAlign:'center',}}>{this.props.message}</Text>
                        <TouchableHighlight underlayColor={"#dddddd"}
                                            onPress={()=>this._setSingleModalVisible(false)}
                                            style={{width: 270,height:44,borderTopWidth:0.25,
                                                borderTopColor:'#dddddd',position:'absolute',
                                                bottom:0,borderBottomRightRadius:8,borderBottomLeftRadius:8}}>

                            <Text style={{width: 270,height:44,color:'#388BED',
                                fontSize:15,lineHeight:44,textAlign:'center',}}>{this.props.btnTitle}</Text>

                        </TouchableHighlight>

                    </View>
                </View>

            </Modal>

        </View>);
    };

    _setSingleModalVisible(visible) {
        this.setState({singleDataVisible: visible});
    }


}

SingleDialog.propTypes = {
    visible:PropTypes.bool.isRequired,
    title:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
    height:PropTypes.number.isRequired,
    btnTitle:PropTypes.string.isRequired,

};

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    idCardImgViewRight: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
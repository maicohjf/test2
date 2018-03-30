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

export default class BothDialog extends Component<{}> {

    constructor(props){
        super(props);

        this.state = {
            bothVisible:false,
        };

    }
    render() {
        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        return (<View>

            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.bothVisible}
                onRequestClose={() => this._setModalVisible(false)}>
                <View style={[styles.idCardImgViewRight,modalBackgroundStyle,{flex: 1,
                }]}>
                    <View style={[ {},{alignItems:'center',width: 270, height: 147,
                        backgroundColor: '#F6F6F6',borderRadius:8}]}>
                        <Text style={{lineHeight:21,fontSize:15,marginTop:20,
                            color:'#000000',fontWeight:'bold'}}>{this.props.title}</Text>
                        <Text style={{marginLeft:15,marginRight:15,
                            lineHeight:21,fontSize:15,color:'#000000'}}>{this.props.message}</Text>
                        <View style={[{flexDirection: 'row',borderTopWidth:0.25,borderTopColor:'#eeeeee',position:'absolute',bottom:0,borderBottomRightRadius:8,borderBottomLeftRadius:8}, styles.idCardImgViewRight]}>
                            <Text onPress={()=>this._setModalVisible(false)} style={{flex: 1,height:44,color:'#999999',fontSize:15,lineHeight:44,textAlign:'center',}}>{this.props.cancelTitle}</Text>
                            <View style={{height:44,width:0.5,backgroundColor:'#eeeeee'}}/>
                            <Text style={{flex: 1,lineHeight:44,color:'#388BED',fontSize:15,textAlign:'center'}}>{this.props.confirmTitle}</Text>
                        </View>
                    </View>
                </View>

            </Modal>


        </View>);
    };

    _setModalVisible(visible) {
        this.setState({bothVisible: visible});
    }

}

BothDialog.propTypes = {
    visible:PropTypes.bool.isRequired,
    title:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
    height:PropTypes.number.isRequired,
    cancelTitle:PropTypes.string.isRequired,
    confirmTitle:PropTypes.string.isRequired,
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
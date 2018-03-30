/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
const {width,scale} = Dimensions.get('window');

export default class EidtInput extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            name:'',
        };
    }
    handleClearName() {
        this.setState({
            name: '',
        });
    }

    render() {
        console.log("tests",scale+"=="+width)
        const marginRight = {marginRight: this.props.titleMarginRight !=0 ? this.props.titleMarginRight:10};
        const deleteIcon = {width:this.props.iconWidth,height:this.props.iconHeight};
        return (<View style={[this.props.style,styles.eidtRow, styles.editBackgroundWhite,]}>
                <Text style={[marginRight,styles.editInputTxt]}>{this.props.title}</Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    onChangeText={text => this.setState({name: text})}
                    style={[styles.editNameInput, styles.nameInputWidth]}
                    value={this.state.name}
                    maxLength={13}
                    placeholder={this.props.hintTitle}
                />
                {
                    this.state.name && this.props.icon?
                        <TouchableOpacity style={{marginRight:15}} onPress={() => {
                            this.handleClearName();
                        }}>
                            {this.props.icon? <Image resizeMode={'center'}
                                                     source={this.props.icon}
                                                     style={[deleteIcon]}
                            />:null}

                        </TouchableOpacity> : null
                }

                <View style={{position:'absolute',bottom:0,width:width,marginLeft:15,height:0.5,backgroundColor:'#dddddd'}}/>

            </View>
        );
    };

}

EidtInput.propTypes = {
    addIconClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    hintTitle:PropTypes.string.isRequired,
    titleMarginRight:PropTypes.number.isRequired,
    icon:PropTypes.any,
    iconWidth:PropTypes.number,
    iconHeight:PropTypes.number,
    style:PropTypes.any,

}


let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eidtRow: {
        width: width,
        flexDirection: "row",
        alignItems: "center",
    },
    editBackgroundWhite: {
        backgroundColor: '#ffffff'
    },
    image: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
    },
    editInputTxt: {
        lineHeight: 21,
        height: 21,
        marginLeft: 15,
        color: '#666666',
        fontSize: 15,
    },
    editView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameInputTxt: {
        lineHeight: 21,
        height: 21,
        marginLeft: 15,
        marginRight: 15,
        color: '#666666',
        fontSize: 15,
    },
    editNameInput: {
        height: 44,
        borderWidth: 0,
        fontSize: 15,
    },
    nameInputWidth: {
        flex: 1,
    },
});
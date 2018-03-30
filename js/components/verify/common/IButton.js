/**
 * Created by tongqinyuan on 2018/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    Dimensions,
    PixelRatio,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';
const {width} = Dimensions.get('window');

export default class IButton extends Component<{}> {

    constructor(props){
        super(props);

    }
    render() {
        return (<TouchableHighlight
                style={styles.iBtnWidth}
                underlayColor="#a5a5a5"
                onPress={() => this.setOnClick()}>
                <Text style={styles.btnColor}>{this.props.title}</Text>
            </TouchableHighlight>

        );
    };
    setOnClick(){
        this.props.onClick();
    }

}

IButton.propTypes = {
    onClick:PropTypes.func,
    title:PropTypes.string.isRequired,

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iBtnWidth: {
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
});
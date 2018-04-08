import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Menu, Toast } from 'antd-mobile';


const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Popover extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectType: 0,
      h: 100,
    };
  };

  // state = {
  //   // w: 100,
  //   h: 100,
  // };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({/*w: this.state.w + 15,*/ h: this.state.h + 100})
  }


  
  render() {
    return (
      <View style={styles.container}>
      <View>

      </View>
      <View>

      </View>
          {/* <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity> */}
        <View style={[styles.box, {/*width: this.state.w,*/ height: this.state.h}]} >
        <View style = {styles.item}>
          <Text style = {styles.itemText}>默认</Text>  
          <TouchableOpacity style = {styles.itemButton} onPress = {()=> {
          }}>
            <Image source = {require('.././img/Unselected-icon.png')}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.item}>
          <Text style = {styles.itemText}>私人订制</Text>
          <TouchableOpacity style = {styles.itemButton} onPress = {() => {
              
          }}>
            <Image source = {require('.././img/Selected-icon.png')} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 44,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)'
    
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 0,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  item: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 15,
    alignItems: 'center'
  },

  itemButton: {
    marginRight: 40,
    alignItems: 'center'
  },


});
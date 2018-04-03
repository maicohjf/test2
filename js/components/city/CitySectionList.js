/**
 * 城市列表检索指示器
 * Created by liyanxi on 4/2/18.
 */

'use strict';
import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const returnTrue = () => true;

export  default class CitySectionList extends React.PureComponent {

  static propTypes = {
    //这边是需要显示的数据信息
    sections: PropTypes.array,
    //点击拖动选择时候的回调
    onSectionSelect: PropTypes.func,
    //手指抬起的时候的回调
    onSectionUp: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.lastSelectedIndex = null;
    this.state = {
      text: '无',
      isShow: false
    }
  }

  componentDidMount() {
    //它们的高度都是一样的，所以这边只需要测量一个就好了
    const sectionItem = this.refs.sectionItem0;

    this.measureTimer = setTimeout(() => {
      sectionItem.measure((x, y, width, height, pageX, pageY) => {
        this.measure = {
          y: pageY,
          height
        };
      })
    }, 0);
  }

  componentWillUnmount() {
    this.measureTimer && clearTimeout(this.measureTimer);
  }

  _renderIndicators = (item, index) => {
    return (
        <View
            style={styles.sectionView}
            pointerEvents="none"
            key={index}
            ref={'sectionItem' + index}>
          <Text style={styles.letterStyle}>{item}</Text>
        </View>
    )
  };

  _renderModelView = () => {
    return (
        <View style={styles.modelView}>
          <View style={styles.viewShow}>
            <Text style={styles.textShow}>{this.state.text}</Text>
          </View>
        </View>
    )
  };

  detectAndScrollToSection = (e) => {
    const ev = e.nativeEvent.touches[0];
    // 手指按下的时候需要修改颜色
    this.refs.view.setNativeProps({
      style: {
        backgroundColor: 'rgba(0,0,0,0.2)'
      }
    });
    const targetY = ev.pageY;
    const {y, height} = this.measure;
    if (!y || targetY < y) {
      return;
    }
    let index = Math.floor((targetY - y) / height);
    index = Math.min(index, this.props.sections.length - 1);
    if (this.lastSelectedIndex !== index && index < this.props.sections.length) {
      this.lastSelectedIndex = index;
      this.onSectionSelect(this.props.sections[index], index, true);
      this.setState({text: this.props.sections[index], isShow: true});
    }
  };

  resetSection = (event) => {
    // 手指抬起来的时候需要变回去
    this.refs.view.setNativeProps({
      style: {
        backgroundColor: 'white'
      }
    });
    this.setState({isShow: false});
    this.lastSelectedIndex = null;
    this.props.onSectionUp && this.props.onSectionUp();
  };

  onSectionSelect(section, index, fromTouch) {
    this.props.onSectionSelect && this.props.onSectionSelect(section, index);

    if (!fromTouch) {
      this.lastSelectedIndex = null;
    }
  }

  render() {
    return (
        <View
            pointerEvents='box-none'
            style={styles.topView}>
          {this.state.isShow ? this._renderModelView() : null}
          <View
              style={styles.indicatorContainer}
              ref='view'
              onStartShouldSetResponder={returnTrue}
              onMoveShouldSetResponder={returnTrue}
              onResponderGrant={this.detectAndScrollToSection}
              onResponderMove={this.detectAndScrollToSection}
              onResponderRelease={this.resetSection}>
            {this.props.sections.map((item, index) => this._renderIndicators(item, index))}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0
  },
  indicatorContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0,
    width: 23,
  },
  sectionView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  letterStyle: {
    height: 18,
    fontSize: 13,
    color: '#388bed',
    lineHeight: 18,
    width: 23,
    textAlign: 'center',
  },

  modelView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0
  },

  viewShow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    width: 80,
    height: 80,
    borderRadius: 3
  },

  textShow: {
    fontSize: 50,
    color: '#fff',
  },
});
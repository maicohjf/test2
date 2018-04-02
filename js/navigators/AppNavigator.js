import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, ActivityIndicator, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import {addListener} from '../utils/redux';
import { AppNavigator } from '../navigators/config';
import { fetchDict, fetchCommon } from '../actions';

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentWillMount() {
    console.log('----');
    const { dispatch } = this.props;
    dispatch(fetchDict());
  }

  render() {
    const {dispatch, nav} = this.props;
    return (
      <View style={styles.container}>
        {
          this.props.common.isLoading
          && <View style={styles.loading}>
            <ActivityIndicator/>
          </View>
        }
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
}
});

const mapStateToProps = state => ({
  nav: state.nav,
  common: state.common,
});

export default connect(mapStateToProps)(AppWithNavigationState);

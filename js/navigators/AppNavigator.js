import React from 'react';
import PropTypes from 'prop-types';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {addListener} from '../utils/redux';
import { AppNavigator } from '../navigators/config';
import { fetchDict } from '../actions';

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
        <AppNavigator
            navigation={addNavigationHelpers({
              dispatch,
              state: nav,
              addListener,
            })}
        />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

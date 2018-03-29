import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/login';
import HomeScreen from '../components/home';
import InvestorScreen from '../components/investor';
import ProfileScreen from '../components/profile';
import ContractScreen from '../components/contract';
import ContractDetailScreen from '../components/contract/detail';
import PublishScreen from '../components/publish';
import MessageScreen from '../components/message';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Contract: { screen: ContractScreen },
  ContractDetail: { screen: ContractDetailScreen },
  Publish: { screen: PublishScreen },
  Message: { screen: MessageScreen }
},{
  initialRouteName: 'Home',
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
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

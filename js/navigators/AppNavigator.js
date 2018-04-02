import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
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
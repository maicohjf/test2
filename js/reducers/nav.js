import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/config';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  // secondAction,
  tempNavState
);

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      // nextState = AppNavigator.router.getStateForAction(
      //   NavigationActions.back(),
      //   state
      // );
      console.log(state);
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
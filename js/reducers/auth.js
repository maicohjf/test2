import ActionsTypes from '../actions/actionsTypes';

const initialAuthState = { isLoggedIn: false };

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionsTypes.USER_LOGIN_SUCCESS:
      console.log(state);
      return { ...state, isLoggedIn: true };
    case 'Logout':
      console.log(state);
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};


import ActionsTypes from './actionsTypes';

export function login(data) {
  console.log(ActionsTypes.USER_LOGIN_REQUEST);
  return {
    type: ActionsTypes.USER_LOGIN_REQUEST,
    data,
  };
}

export function logout() {
  return {
    type: ActionsTypes.USER_LOGOUT_REQUEST,
  };
}
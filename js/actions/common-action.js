import ActionsTypes from './actionsTypes';

export function sendSmsCode(data) {
  console.log(ActionsTypes.SMSCODE_SEND_REQUEST);
  return {
    type: ActionsTypes.SMSCODE_SEND_REQUEST,
    data,
  };
}

export function fetchDict() {
  return {
    type: ActionsTypes.DICT_FETCH_REQUEST,
  };
}
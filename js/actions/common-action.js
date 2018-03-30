import ActionsTypes from './actionsTypes';

export function sendSmsCode(data) {
  console.log(ActionsTypes.SMSCODE_SEND_REQUEST);
  return {
    type: ActionsTypes.SMSCODE_SEND_REQUEST,
    data,
  };
}
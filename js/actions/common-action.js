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

export function fetchArea() {
  return {
    type: ActionsTypes.AREA_FETCH_REQUEST,
  };
}

export function fetchCommon() {
  return {
    type: ActionsTypes.COMMON_FETCH_REQUEST,
  };
}

export function fetchAllCities() {
  return {
    type: ActionsTypes.ALL_CITIES_FETCH_REQUEST,
  }
}
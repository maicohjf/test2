// import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../constants/api';
import { request } from '../utils/request';

export default {
  sendSmsCode: (phone, op) => {
    return request(api.sendSmsCode, {
      method: 'post',
      payload: {
        phone,
        op,
      }
    })
  }
}

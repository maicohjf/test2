import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../constants/api';
import { request } from '../utils/request';

export default {
  login: (phone, sms_code) => {
    return call(request, api.login, {
      method: 'post',
      payload: {
        phone,
        sms_code,
        platform: 1,
      }
    });
  }
}

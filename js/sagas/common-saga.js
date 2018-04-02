import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import CommonService from '../services/common-service';

import api from '../constants/api';
import { request } from '../utils/request';
import { withLoading } from './saga-helper';

export function* fetchDict() {
  try {
    const res = yield call(request, api.dict, {
      method: 'get',
    });
    yield put({
      type: ActionsTypes.DICT_FETCH_SUCCESS,
      dict: res.data.dict,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.DICT_FETCH_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.DICT_FETCH_REQUEST, withLoading(fetchDict)),
  ]);
}
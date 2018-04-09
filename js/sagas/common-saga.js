import {delay} from 'redux-saga';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import DB from '../utils/db';

import ActionsTypes from '../actions/actionsTypes';

import api from '../constants/api';
import {request} from '../utils/request';
import {withLoading} from './saga-helper';
import dbUtil from '../utils/db';

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

export function* fetchArea() {
  try {
    const res = yield call(request, api.area, {
      method: 'get',
    });
    yield put({
      type: ActionsTypes.AREA_FETCH_SUCCESS,
      dict: res.data.dict,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.AREA_FETCH_FAILURE,
      payload: err,
    });
  }
}

export function* fetchCommon() {
  try {
    const [resDict, resArea] = yield [
      call(request, api.dict, {
        method: 'get',
      }),
      call(request, api.area, {
        method: 'get',
      })
    ];
    console.log(resArea);
    console.log(resDict);
    yield put({
      type: ActionsTypes.DICT_FETCH_SUCCESS,
      dict: resDict.data.dict,
    });
    if (resArea && resArea.data && resArea.data.list && resArea.data.version !== null && resArea.data.list.address) {
      dbUtil.writeLocation(resArea.data);
    }
    if (resDict && resDict.data && resDict.data.version != null) {
      dbUtil.writeDict(resDict.data);
    }
  }
  catch (err) {
    yield put({
      type: ActionsTypes.DICT_FETCH_FAILURE,
      payload: err,
    });
  }
}

export function* fetchDBCity() {
  const val = yield dbUtil.readCities();
  yield put({
    type: ActionsTypes.ALL_CITIES_FETCH_SUCCESS,
    city: val,
  });
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.DICT_FETCH_REQUEST, withLoading(fetchDict)),
    takeLatest(ActionsTypes.COMMON_FETCH_REQUEST, withLoading(fetchCommon)),
    takeLatest(ActionsTypes.ALL_CITIES_FETCH_REQUEST, fetchDBCity),
  ]);
}
import ActionsTypes from '../actions/actionsTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function withLoading(callback) {
  return function*(params) {
    yield put({
      type: ActionsTypes.LOADING_START,
    });
    if (callback) {
      yield* callback(params);
    }
    yield put({
      type: ActionsTypes.LOADING_END,
    });
  }
}
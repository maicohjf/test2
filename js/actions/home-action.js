/**
 * Created by liyanxi on 4/9/18.
 */
import ActionsTypes from './actionsTypes';

export function fetchHomeData() {
  return {
    type: ActionsTypes.HOME_DATA_FETCH_REQUEST,
  }
}
/**
 * Created by liyanxi on 4/9/18.
 */
import ActionsTypes from '../actions/actionsTypes';

const initialAuthState = {
  homeData: {
    msg_count: 0,
    banners: [],
    notices: [],
    quota: 0
  }
};


export const home = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionsTypes.HOME_DATA_FETCH_SUCCESS:
      return {...state, homeData: action.homeData};
    default:
      return state;
  }
};

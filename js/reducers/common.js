import ActionsTypes from '../actions/actionsTypes';

const initialAuthState = {
  isLoading: false,
  errMsg: null,
  dict: [],
  city: {
    cities: [],
    sections: []
  }
};

export const common = (state = initialAuthState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionsTypes.LOADING_START:
      return {...state, isLoading: true};
    case ActionsTypes.LOADING_END:
      return {...state, isLoading: false};
    case ActionsTypes.DICT_FETCH_SUCCESS:
      return {
        ...state,
        dict: action.dict,
      };
    case ActionsTypes.ALL_CITIES_FETCH_SUCCESS:
      return {
        ...state,
        city: action.city,
      };
    case ActionsTypes.COMMON_FAILURE:
      return {
        ...state,
        errMsg: action.errMsg
      };
    default:
      return state;
  }
};

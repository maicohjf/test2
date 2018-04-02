import ActionsTypes from '../actions/actionsTypes';

const initialAuthState = {
  isLoading: false,
  dict: [],
};

export const common = (state = initialAuthState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionsTypes.LOADING_START:
      return { ...state, isLoading: true };
    case ActionsTypes.LOADING_END:
      return { ...state, isLoading: false };
    case ActionsTypes.DICT_FETCH_SUCCESS:
      return {
        ...state,
        dict: action.dict,
      };
    default:
      return state;
  }
};

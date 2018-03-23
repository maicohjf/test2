import ActionsTypes from '../actions/actionsTypes';

const initialAuthState = {
  isLoading: false,
};

export const common = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionsTypes.LOADING_START:
      return { ...state, isLoading: true };
    case ActionsTypes.LOADING_END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const initialAuthState = { isLoggedIn: false };

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      console.log(state);
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};


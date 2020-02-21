import Types from "./auth.types";
const INITIAL_STATE = {
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN_FAILED:
      return {
        ...state,
        error: true,
      }
    case Types.LOGIN_SUCCESS:
      return{
        ...state,
        error: false,
      }
    case Types.LOGOUT_SUCCESS:
      return{
        ...state,
        error: false,
      }
    case Types.CLOSE_ERROR:
      return{
        ...state,
        error: false,
      }
    default:
      return state;
  }
};

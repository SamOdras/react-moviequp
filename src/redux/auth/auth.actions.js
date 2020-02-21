import Types from './auth.types';
import history from '../../history';

const loginFailed = () => ({
  type: Types.LOGIN_FAILED
});
const loginSuccess = () => ({
  type: Types.LOGIN_SUCCESS
});
const logoutSuccess = () => ({
  type: Types.LOGOUT_SUCCESS
});

export const loginMovie = formValues => dispatch => {
  const { username, password } = formValues;
  if (username !== "qupas") {
    dispatch(loginFailed());
  } else if (password !== "12345678") {
    dispatch(loginFailed());
  } else {
    dispatch(loginSuccess());
    localStorage.setItem("qupas", "qupas");
    history.push('/');
  }
};
export const logoutMovie = () => dispatch => {
  localStorage.removeItem('qupas');
  dispatch(logoutSuccess());
}
export const closeError = () => ({
  type: Types.CLOSE_ERROR
});

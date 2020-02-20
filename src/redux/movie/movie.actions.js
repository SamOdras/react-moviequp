import Types from "./movie.types";

const fetchStart = () => ({
  type: Types.FETCH_START
});
const fetchSuccess = movieItem => ({
  type: Types.FETCH_SUCCESS,
  payload: movieItem
});
const fetchFailure = errorMessage => ({
  type: Types.FETCH_FAILURE,
  payload: errorMessage
});

export const getMovie = () => async dispatch => {
  dispatch(fetchStart());
  fetch('http://www.omdbapi.com/?apikey=e3fad09a&s=most')
  .then(response => {
    return response.json()
  })
  .then(data => {
    dispatch(fetchSuccess(data.Search))
  })
  .catch(err => {
    dispatch(fetchFailure(err))
  })
};

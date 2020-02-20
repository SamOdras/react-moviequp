import Types from "./movie.types";

const movieAPI = 'http://www.omdbapi.com/?apikey=e3fad09a&';

const fetchStart = () => ({
  type: Types.FETCH_START
});
const fetchSuccess = movieItem => ({
  type: Types.FETCH_SUCCESS,
  payload: movieItem
});
const fetchDetailSuccess = movieItem => ({
  type: Types.FETCH_DETAIL_SUCCESS,
  payload: movieItem
});
const fetchFailure = errorMessage => ({
  type: Types.FETCH_FAILURE,
  payload: errorMessage
});

export const getMovie = () => async dispatch => {
  dispatch(fetchStart());
  fetch(`${movieAPI}s=most`)
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

export const getMovieDetails = movieId => async dispatch => {
  dispatch(fetchStart());
  fetch(`${movieAPI}i=${movieId}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    dispatch(fetchDetailSuccess(data))
  })
  .catch(err => {
    dispatch(fetchFailure(err))
  })
};
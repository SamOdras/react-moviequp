import Types from "./movie.types";

const movieAPI = "http://www.omdbapi.com/?apikey=e3fad09a&";

const fetchStart = () => ({
  type: Types.FETCH_START
});
const clearArray = () => ({
  type: Types.CLEAR_ARRAY,
})
const fetchSuccess = movieItem => ({
  type: Types.FETCH_SUCCESS,
  payload: movieItem
});
const fetchDetailSuccess = movieItem => ({
  type: Types.FETCH_DETAIL_SUCCESS,
  payload: movieItem
});
const searchSuccess = searchItem => ({
  type: Types.SEARCH_SUCCESS,
  payload: searchItem
});
const fetchFailure = errorMessage => ({
  type: Types.FETCH_FAILURE,
  payload: errorMessage
});
export const getSearchKeyword = searchKeyword => ({
  type: Types.GET_KEYWORD,
  payload: searchKeyword
});
export const getMovie = () => async dispatch => {
  dispatch(fetchStart());
  dispatch(clearArray());
  fetch(`${movieAPI}s=most`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch(fetchSuccess(data));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};
export const getInfinteMovie = (paginate = 1, keyword = 'most') => async dispatch => {
  fetch(`${movieAPI}s=${keyword}&page=${paginate}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch(fetchSuccess(data));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};
export const searchMovieList = searchKeyWord => async dispatch => {
  dispatch(fetchStart());
  fetch(`${movieAPI}s=${searchKeyWord}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch(searchSuccess(data.Search));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};
export const getMovieDetails = movieId => async dispatch => {
  dispatch(fetchStart());
  fetch(`${movieAPI}i=${movieId}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch(fetchDetailSuccess(data));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};

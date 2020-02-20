import Types from './movie.types';
import { infiniteMovieItem } from './movie.utils';

const INITIAL_STATE = {
  collections: [],
  collectionsSearch: null,
  collectionDetail: null,
  isFetching: false,
  errorMessage: undefined,
  totalMovie: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: infiniteMovieItem(state.collections, action.payload.Search),
        totalMovie: action.payload.totalResults,
      }
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case Types.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collectionDetail: action.payload,
      }
    case Types.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;

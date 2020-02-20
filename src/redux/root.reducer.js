import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
import favoriteItem from './favorite/favorite.reducer';
import movieItem from './movie/movie.reducer';

const appReducer =  combineReducers({
  form: FormReducer,
  favorite:favoriteItem,
  movie: movieItem,
})

export default appReducer;
import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import favoriteItem from './favorite/favorite.reducer';
import movieItem from './movie/movie.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite']
}
const appReducer =  combineReducers({
  form: FormReducer,
  favorite:favoriteItem,
  movie: movieItem,
})

export default persistReducer(persistConfig, appReducer);


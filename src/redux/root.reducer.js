import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
import favoriteItem from './favorite/favorite.reducer';
const appReducer =  combineReducers({
  form: FormReducer,
  favorite:favoriteItem,
})

export default appReducer;
import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';

const appReducer =  combineReducers({
  form: FormReducer,
})

export default appReducer;
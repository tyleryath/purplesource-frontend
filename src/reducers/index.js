import { combineReducers } from 'redux';
import newsCardReducer from './NewsCardReducer';
import categoryBarReducer from './CategoryBarReducer';

export default combineReducers({
  newsCardReducer,
  categoryBarReducer
});

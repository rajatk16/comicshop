import {combineReducers} from 'redux';

import comicsReducer from './comics'; 
import comicReducer from './comic';

export default combineReducers({
  comics: comicsReducer,
  comic: comicReducer
})
import { COMIC_DETAIL_FAILURE, COMIC_DETAIL_REQUEST, COMIC_DETAIL_SUCCESS } from '../types';

const INITIAL_STATE = {
  comic: null,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMIC_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case COMIC_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        comic: action.payload
      }
    case COMIC_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
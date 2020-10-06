import { COMIC_LIST_FAILURE, COMIC_LIST_REQUEST, COMIC_LIST_SUCCESS } from "../types";

const INITIAL_STATE = {
  loading: false,
  comics: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMIC_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case COMIC_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        comics: action.payload
      }
    case COMIC_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
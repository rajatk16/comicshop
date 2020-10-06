import Axios from "axios";
import { 
  COMIC_LIST_FAILURE,
  COMIC_LIST_REQUEST,
  COMIC_LIST_SUCCESS
} from "../types";

export const comicListRequest = () => ({
  type: COMIC_LIST_REQUEST
})

export const comicListRequestAsync = () => async (dispatch) => {
  try {
    dispatch(comicListRequest());
    const {data} = await Axios.get(
      '/api/comics',
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    dispatch(comicListSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

export const comicListSuccess = (response) => ({
  type: COMIC_LIST_SUCCESS,
  payload: response
})

export const comicListFailure = (error) => ({
  type: COMIC_LIST_FAILURE,
  payload: error
})
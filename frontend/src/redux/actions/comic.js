import Axios from "axios";
import { 
  COMIC_DETAIL_FAILURE,
  COMIC_DETAIL_REQUEST,
  COMIC_DETAIL_SUCCESS
} from "../types";

export const comicDetailRequest = () => ({
  type: COMIC_DETAIL_REQUEST
})

export const comicDetailRequestAsync = (id) => async (dispatch) => {
  try {
    dispatch(comicDetailRequest());
    const {data} = await Axios.get(
      `/api/comics/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    dispatch(comicDetailSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

export const comicDetailSuccess = (response) => ({
  type: COMIC_DETAIL_SUCCESS,
  payload: response
})

export const comicDetailFailure = (error) => ({
  type: COMIC_DETAIL_FAILURE,
  payload: error
})
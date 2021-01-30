import axios from 'axios';
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from '../constants/categoryConstants';

export const listCategories = async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/categories');
    return dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
  }
};

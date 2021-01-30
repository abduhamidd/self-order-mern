import axios from 'axios';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = async (dispatch, categoryName = '') => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get(`/api/products?category=${categoryName}`);
    return dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

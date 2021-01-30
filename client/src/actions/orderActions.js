import axios from 'axios';
import {
  ORDER_ADD_ITEM,
  ORDER_ADD_SET_PAYMENT_TYPE,
  ORDER_CLEAR,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_QUEUE_LIST_FAIL,
  ORDER_QUEUE_LIST_REQUEST,
  ORDER_QUEUE_LIST_SUCCESS,
} from '../constants/orderConstants';
import { SCREEN_SET_WIDTH } from '../constants/productConstants';

export const createOrder = async (dispatch, order) => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  try {
    const { data } = await axios.post('/api/orders', order);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    dispatch({ type: ORDER_CLEAR });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};

export const setOrderType = async (dispatch, paymentType) => {
  return dispatch({ type: ORDER_ADD_SET_PAYMENT_TYPE, payload: paymentType });
};

export const clearOrder = async (dispatch) => {
  return dispatch({ type: ORDER_CLEAR });
};

export const addToOrder = async (dispatch, item) => {
  return dispatch({ type: ORDER_ADD_ITEM, payload: item });
};

export const listQueue = async (dispatch) => {
  dispatch({ type: ORDER_QUEUE_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/orders/queue');
    dispatch({ type: SCREEN_SET_WIDTH });
    return dispatch({ type: ORDER_QUEUE_LIST_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: ORDER_QUEUE_LIST_FAIL, payload: error.message });
  }
};

export const listOrders = async (dispatch) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/orders');
    dispatch({ type: SCREEN_SET_WIDTH });
    return dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};

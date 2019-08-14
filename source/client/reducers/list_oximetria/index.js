import initialState from "./initialState";
import {
  FETCH_LIST_OXIMETRIA_INIT,
  FETCH_LIST_OXIMETRIA_SUCCESS,
  FETCH_LIST_OXIMETRIA_FAILURE,
  FETCH_LIST_OXIMETRIA_COUNT_INIT,
  FETCH_LIST_OXIMETRIA_COUNT_SUCCESS,
  FETCH_LIST_OXIMETRIA_COUNT_FAILURE,
  DELETE_OXIMETRIA_INIT,
  DELETE_OXIMETRIA_SUCCESS,
  DELETE_OXIMETRIA_FAILURE,
  RESET_LIST_OXIMETRIA,
  RESET_MODAL_OXIMETRIA
} from "../../actions/list_oximetria/types";

export default function listOximetria(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_OXIMETRIA:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_OXIMETRIA:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_OXIMETRIA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_OXIMETRIA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_OXIMETRIA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_OXIMETRIA_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_OXIMETRIA_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_OXIMETRIA_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_OXIMETRIA_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_OXIMETRIA_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_OXIMETRIA_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

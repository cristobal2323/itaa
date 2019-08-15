import initialState from "./initialState";
import {
  FETCH_LIST_POLISOMNOGRAFIA_INIT,
  FETCH_LIST_POLISOMNOGRAFIA_SUCCESS,
  FETCH_LIST_POLISOMNOGRAFIA_FAILURE,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_INIT,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_SUCCESS,
  FETCH_LIST_POLISOMNOGRAFIA_COUNT_FAILURE,
  DELETE_POLISOMNOGRAFIA_INIT,
  DELETE_POLISOMNOGRAFIA_SUCCESS,
  DELETE_POLISOMNOGRAFIA_FAILURE,
  RESET_LIST_POLISOMNOGRAFIA,
  RESET_MODAL_POLISOMNOGRAFIA
} from "../../actions/list_polisomnografia/types";

export default function listPolisomnografia(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_POLISOMNOGRAFIA:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_POLISOMNOGRAFIA:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_POLISOMNOGRAFIA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_POLISOMNOGRAFIA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_POLISOMNOGRAFIA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_POLISOMNOGRAFIA_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_POLISOMNOGRAFIA_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_POLISOMNOGRAFIA_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_POLISOMNOGRAFIA_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_POLISOMNOGRAFIA_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_POLISOMNOGRAFIA_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

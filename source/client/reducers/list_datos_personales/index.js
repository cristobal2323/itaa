import initialState from "./initialState";
import {
  FETCH_LIST_DATOS_PERSONALES_INIT,
  FETCH_LIST_DATOS_PERSONALES_SUCCESS,
  FETCH_LIST_DATOS_PERSONALES_FAILURE,
  FETCH_LIST_DATOS_PERSONALES_COUNT_INIT,
  FETCH_LIST_DATOS_PERSONALES_COUNT_SUCCESS,
  FETCH_LIST_DATOS_PERSONALES_COUNT_FAILURE,
  DELETE_DATOS_PERSONALES_INIT,
  DELETE_DATOS_PERSONALES_SUCCESS,
  DELETE_DATOS_PERSONALES_FAILURE,
  RESET_LIST_DATOS_PERSONALES,
  RESET_MODAL_DATOS_PERSONALES
} from "../../actions/list_datos_personales/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_DATOS_PERSONALES:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_DATOS_PERSONALES:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_DATOS_PERSONALES_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_DATOS_PERSONALES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_DATOS_PERSONALES_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_DATOS_PERSONALES_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_DATOS_PERSONALES_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_DATOS_PERSONALES_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_DATOS_PERSONALES_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_DATOS_PERSONALES_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_DATOS_PERSONALES_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

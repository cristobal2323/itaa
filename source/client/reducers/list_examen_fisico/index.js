import initialState from "./initialState";
import {
  FETCH_LIST_EXAMEN_FISICO_INIT,
  FETCH_LIST_EXAMEN_FISICO_SUCCESS,
  FETCH_LIST_EXAMEN_FISICO_FAILURE,
  FETCH_LIST_EXAMEN_FISICO_COUNT_INIT,
  FETCH_LIST_EXAMEN_FISICO_COUNT_SUCCESS,
  FETCH_LIST_EXAMEN_FISICO_COUNT_FAILURE,
  DELETE_EXAMEN_FISICO_INIT,
  DELETE_EXAMEN_FISICO_SUCCESS,
  DELETE_EXAMEN_FISICO_FAILURE,
  RESET_LIST_EXAMEN_FISICO,
  RESET_MODAL_EXAMEN_FISICO
} from "../../actions/list_examen_fisico/types";

export default function listExamenFisico(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_EXAMEN_FISICO:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_EXAMEN_FISICO:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_EXAMEN_FISICO_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_EXAMEN_FISICO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_EXAMEN_FISICO_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_EXAMEN_FISICO_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_EXAMEN_FISICO_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_EXAMEN_FISICO_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_EXAMEN_FISICO_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_EXAMEN_FISICO_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_EXAMEN_FISICO_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

import initialState from "./initialState";
import {
  FETCH_LIST_TRABAJADOR_EMPRESA_INIT,
  FETCH_LIST_TRABAJADOR_EMPRESA_SUCCESS,
  FETCH_LIST_TRABAJADOR_EMPRESA_FAILURE,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_INIT,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_SUCCESS,
  FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_FAILURE,
  DELETE_TRABAJADOR_EMPRESA_INIT,
  DELETE_TRABAJADOR_EMPRESA_SUCCESS,
  DELETE_TRABAJADOR_EMPRESA_FAILURE,
  RESET_LIST_TRABAJADOR_EMPRESA,
  RESET_MODAL_TRABAJADOR_EMPRESA
} from "../../actions/list_trabajador_empresa/types";

export default function listTrabajadorEmpresa(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_TRABAJADOR_EMPRESA:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_TRABAJADOR_EMPRESA:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_TRABAJADOR_EMPRESA_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_TRABAJADOR_EMPRESA_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_TRABAJADOR_EMPRESA_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_TRABAJADOR_EMPRESA_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

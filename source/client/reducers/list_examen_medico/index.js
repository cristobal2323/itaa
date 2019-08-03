import initialState from "./initialState";
import {
  FETCH_LIST_EXAMEN_MEDICO_INIT,
  FETCH_LIST_EXAMEN_MEDICO_SUCCESS,
  FETCH_LIST_EXAMEN_MEDICO_FAILURE,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_INIT,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_SUCCESS,
  FETCH_LIST_EXAMEN_MEDICO_COUNT_FAILURE,
  DELETE_EXAMEN_MEDICO_INIT,
  DELETE_EXAMEN_MEDICO_SUCCESS,
  DELETE_EXAMEN_MEDICO_FAILURE,
  RESET_LIST_EXAMEN_MEDICO,
  RESET_MODAL_EXAMEN_MEDICO
} from "../../actions/list_examen_medico/types";

export default function listExamenMedico(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_EXAMEN_MEDICO:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_EXAMEN_MEDICO:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_EXAMEN_MEDICO_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_EXAMEN_MEDICO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_EXAMEN_MEDICO_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case FETCH_LIST_EXAMEN_MEDICO_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_LIST_EXAMEN_MEDICO_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_LIST_EXAMEN_MEDICO_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    case DELETE_EXAMEN_MEDICO_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_EXAMEN_MEDICO_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_EXAMEN_MEDICO_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

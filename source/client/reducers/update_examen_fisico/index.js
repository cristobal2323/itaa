import initialState from "./initialState";
import {
  FETCH_GET_EXAMEN_FISICO_INIT,
  FETCH_GET_EXAMEN_FISICO_SUCCESS,
  FETCH_GET_EXAMEN_FISICO_FAILURE,
  UPDATE_EXAMEN_FISICO_INIT,
  UPDATE_EXAMEN_FISICO_SUCCESS,
  UPDATE_EXAMEN_FISICO_FAILURE,
  RESET_GET_EXAMEN_FISICO
} from "../../actions/update_examen_fisico/types";

export default function updateExamenFisico(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_EXAMEN_FISICO:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_EXAMEN_FISICO_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_EXAMEN_FISICO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_EXAMEN_FISICO_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_EXAMEN_FISICO_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_EXAMEN_FISICO_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_EXAMEN_FISICO_FAILURE:
      return {
        ...state,
        dataUpdate: false,
        loadingUpdate: false,
        statusUpdate: 501
      };
    default:
      return state;
  }
}

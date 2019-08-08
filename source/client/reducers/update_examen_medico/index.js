import initialState from "./initialState";
import {
  FETCH_GET_EXAMEN_MEDICO_INIT,
  FETCH_GET_EXAMEN_MEDICO_SUCCESS,
  FETCH_GET_EXAMEN_MEDICO_FAILURE,
  UPDATE_EXAMEN_MEDICO_INIT,
  UPDATE_EXAMEN_MEDICO_SUCCESS,
  UPDATE_EXAMEN_MEDICO_FAILURE,
  RESET_GET_EXAMEN_MEDICO
} from "../../actions/update_examen_medico/types";

export default function updateExamenMedico(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_EXAMEN_MEDICO:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_EXAMEN_MEDICO_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_EXAMEN_MEDICO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_EXAMEN_MEDICO_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_EXAMEN_MEDICO_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_EXAMEN_MEDICO_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_EXAMEN_MEDICO_FAILURE:
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

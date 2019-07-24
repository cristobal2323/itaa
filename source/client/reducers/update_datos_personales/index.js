import initialState from "./initialState";
import {
  FETCH_GET_DATOS_PERSONALES_INIT,
  FETCH_GET_DATOS_PERSONALES_SUCCESS,
  FETCH_GET_DATOS_PERSONALES_FAILURE,
  UPDATE_DATOS_PERSONALES_INIT,
  UPDATE_DATOS_PERSONALES_SUCCESS,
  UPDATE_DATOS_PERSONALES_FAILURE,
  RESET_GET_DATOS_PERSONALES
} from "../../actions/update_datos_personales/types";

export default function updateDatosPersonales(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_DATOS_PERSONALES:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_DATOS_PERSONALES_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_DATOS_PERSONALES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_DATOS_PERSONALES_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_DATOS_PERSONALES_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_DATOS_PERSONALES_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_DATOS_PERSONALES_FAILURE:
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

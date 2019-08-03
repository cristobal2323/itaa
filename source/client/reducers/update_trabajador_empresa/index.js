import initialState from "./initialState";
import {
  FETCH_GET_TRABAJADOR_EMPRESA_INIT,
  FETCH_GET_TRABAJADOR_EMPRESA_SUCCESS,
  FETCH_GET_TRABAJADOR_EMPRESA_FAILURE,
  UPDATE_TRABAJADOR_EMPRESA_INIT,
  UPDATE_TRABAJADOR_EMPRESA_SUCCESS,
  UPDATE_TRABAJADOR_EMPRESA_FAILURE,
  RESET_GET_TRABAJADOR_EMPRESA
} from "../../actions/update_trabajador_empresa/types";

export default function updateTrabajadorEmpresa(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_TRABAJADOR_EMPRESA:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_TRABAJADOR_EMPRESA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_TRABAJADOR_EMPRESA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_TRABAJADOR_EMPRESA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_TRABAJADOR_EMPRESA_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_TRABAJADOR_EMPRESA_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_TRABAJADOR_EMPRESA_FAILURE:
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

import initialState from "./initialState";
import {
  FETCH_LIST_EXAMEN_FISICO_INFO_INIT,
  FETCH_LIST_EXAMEN_FISICO_INFO_SUCCESS,
  FETCH_LIST_EXAMEN_FISICO_INFO_FAILURE,
  RESET_LIST_EXAMEN_FISICO_INFO
} from "../../actions/add_examen_fisico/types";

export default function addExamenFisico(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_EXAMEN_FISICO_INFO:
      return {
        ...state,
        statusInfo: 200
      };
    case FETCH_LIST_EXAMEN_FISICO_INFO_INIT:
      return {
        ...state,
        loadingInfo: true
      };
    case FETCH_LIST_EXAMEN_FISICO_INFO_SUCCESS:
      return {
        ...state,
        dataInfo: action.payload.data,
        loadingInfo: false,
        statusInfo: action.payload.status
      };
    case FETCH_LIST_EXAMEN_FISICO_INFO_FAILURE:
      return {
        ...state,
        dataInfo: false,
        loadingInfo: false,
        statusInfo: 501
      };
    default:
      return state;
  }
}

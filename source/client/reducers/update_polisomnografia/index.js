import initialState from "./initialState";
import {
  FETCH_GET_POLISOMNOGRAFIA_INIT,
  FETCH_GET_POLISOMNOGRAFIA_SUCCESS,
  FETCH_GET_POLISOMNOGRAFIA_FAILURE,
  UPDATE_POLISOMNOGRAFIA_INIT,
  UPDATE_POLISOMNOGRAFIA_SUCCESS,
  UPDATE_POLISOMNOGRAFIA_FAILURE,
  RESET_GET_POLISOMNOGRAFIA
} from "../../actions/update_polisomnografia/types";

export default function updatePolisomnografia(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_POLISOMNOGRAFIA:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_POLISOMNOGRAFIA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_POLISOMNOGRAFIA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_POLISOMNOGRAFIA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_POLISOMNOGRAFIA_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_POLISOMNOGRAFIA_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_POLISOMNOGRAFIA_FAILURE:
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

import initialState from "./initialState";
import {
  FETCH_GET_OXIMETRIA_INIT,
  FETCH_GET_OXIMETRIA_SUCCESS,
  FETCH_GET_OXIMETRIA_FAILURE,
  UPDATE_OXIMETRIA_INIT,
  UPDATE_OXIMETRIA_SUCCESS,
  UPDATE_OXIMETRIA_FAILURE,
  RESET_GET_OXIMETRIA
} from "../../actions/update_oximetria/types";

export default function updateOximetria(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_OXIMETRIA:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_OXIMETRIA_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_OXIMETRIA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_OXIMETRIA_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_OXIMETRIA_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_OXIMETRIA_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_OXIMETRIA_FAILURE:
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

import initialState from "./initialState";
import {
  FETCH_LIST_OXIMETRIA_INFO_INIT,
  FETCH_LIST_OXIMETRIA_INFO_SUCCESS,
  FETCH_LIST_OXIMETRIA_INFO_FAILURE,
  RESET_LIST_OXIMETRIA_INFO,
  SAVE_OXIMETRIA_INIT,
  SAVE_OXIMETRIA_SUCCESS,
  SAVE_OXIMETRIA_FAILURE,
  RESET_MODAL_OXIMETRIA
} from "../../actions/add_oximetria/types";

export default function addOximetria(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_OXIMETRIA_INFO:
      return {
        ...state,
        statusInfo: 200
      };
    case RESET_MODAL_OXIMETRIA:
      return {
        ...state,
        dataSave: {},
        loadingSave: false,
        statusSave: 0
      };
    case FETCH_LIST_OXIMETRIA_INFO_INIT:
      return {
        ...state,
        loadingInfo: true
      };
    case FETCH_LIST_OXIMETRIA_INFO_SUCCESS:
      return {
        ...state,
        dataInfo: action.payload.data,
        loadingInfo: false,
        statusInfo: action.payload.status
      };
    case FETCH_LIST_OXIMETRIA_INFO_FAILURE:
      return {
        ...state,
        dataInfo: false,
        loadingInfo: false,
        statusInfo: 501
      };
    case SAVE_OXIMETRIA_INIT:
      return {
        ...state,
        loadingSave: true
      };
    case SAVE_OXIMETRIA_SUCCESS:
      return {
        ...state,
        dataSave: action.payload.data,
        loadingSave: false,
        statusSave: action.payload.status
      };
    case SAVE_OXIMETRIA_FAILURE:
      return {
        ...state,
        dataSave: false,
        loadingSave: false,
        statusSave: 501
      };
    default:
      return state;
  }
}

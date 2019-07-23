import initialState from "./initialState";
import {
  FETCH_LIST_USER_INIT,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE,
  DELETE_USER_INIT,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_LIST_USER,
  RESET_MODAL_USER
} from "../../actions/list_user/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_USER:
      return {
        ...state,
        status: 200
      };
    case RESET_MODAL_USER:
      return {
        ...state,
        dataDelete: {},
        loadingDelete: false,
        statusDelete: 0
      };
    case FETCH_LIST_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_USER_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case DELETE_USER_INIT:
      return {
        ...state,
        loadingDelete: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        statusDelete: 401
      };
    default:
      return state;
  }
}

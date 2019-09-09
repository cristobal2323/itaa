import initialState from "./initialState";
import {
  FETCH_HOME_INIT,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
  FETCH_HOME_COUNT_INIT,
  FETCH_HOME_COUNT_SUCCESS,
  FETCH_HOME_COUNT_FAILURE
} from "../../actions/home/types";

export default function home(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case FETCH_HOME_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        status: 501
      };
    case FETCH_HOME_COUNT_INIT:
      return {
        ...state,
        loadingCount: true
      };
    case FETCH_HOME_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status
      };
    case FETCH_HOME_COUNT_FAILURE:
      return {
        ...state,
        dataCount: false,
        loadingCount: false,
        statusCount: 501
      };
    default:
      return state;
  }
}

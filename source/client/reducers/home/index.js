import initialState from "./initialState";
import {
  FETCH_HOME_INIT,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILURE,
  FETCH_HOME_GRAPH_INIT,
  FETCH_HOME_GRAPH_SUCCESS,
  FETCH_HOME_GRAPH_FAILURE
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
    case FETCH_HOME_GRAPH_INIT:
      return {
        ...state,
        loadingGraph: true
      };
    case FETCH_HOME_GRAPH_SUCCESS:
      return {
        ...state,
        dataGraph: action.payload.data,
        loadingGraph: false,
        statusGraph: action.payload.status
      };
    case FETCH_HOME_GRAPH_FAILURE:
      return {
        ...state,
        dataGraph: [],
        loadingGraph: false,
        statusGraph: 501
      };
    default:
      return state;
  }
}

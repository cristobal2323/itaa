import initialState from "./initialState";
import {
  FETCH_LIST_SURVEYS_EPWORTH_INIT,
  FETCH_LIST_SURVEYS_EPWORTH_SUCCESS,
  FETCH_LIST_SURVEYS_EPWORTH_FAILURE,
  RESET_LIST_SURVEYS_EPWORTH,
  SAVE_SURVEYS_EPWORTH_INIT,
  SAVE_SURVEYS_EPWORTH_SUCCESS,
  SAVE_SURVEYS_EPWORTH_FAILURE,
  RESET_MODAL_SURVEYS_EPWORTH
} from "../../actions/surveys_epworth/types";

export default function surveysEpworth(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_SURVEYS_EPWORTH:
      return {
        ...state,
        status: 0,
        statusCount: 0
      };
    case RESET_MODAL_SURVEYS_EPWORTH:
      return {
        ...state,
        dataSave: {},
        loadingSave: false,
        statusSave: 0
      };
    case FETCH_LIST_SURVEYS_EPWORTH_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_SURVEYS_EPWORTH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_SURVEYS_EPWORTH_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case SAVE_SURVEYS_EPWORTH_INIT:
      return {
        ...state,
        loadingSave: true
      };
    case SAVE_SURVEYS_EPWORTH_SUCCESS:
      return {
        ...state,
        dataSave: action.payload.data,
        loadingSave: false,
        statusSave: action.payload.status
      };
    case SAVE_SURVEYS_EPWORTH_FAILURE:
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

import initialState from "./initialState";
import {
  SAVE_LOGIN_INIT,
  SAVE_LOGIN_SUCCESS,
  SAVE_LOGIN_FAILURE,
  SAVE_REGISTER_INIT,
  SAVE_REGISTER_SUCCESS,
  SAVE_REGISTER_FAILURE,
  SAVE_FORGET_INIT,
  SAVE_FORGET_SUCCESS,
  SAVE_FORGET_FAILURE,
  RESET_LOGIN,
  LOG_OUT
} from "../../actions/login/types";
import { saveLocalState, deleteLocalState } from "../../store/localStorage";

export default function login(state = initialState, action) {
  switch (action.type) {
    case RESET_LOGIN:
      return {
        ...state,
        message: null
      };
    case LOG_OUT:
      deleteLocalState();
      return {
        ...state
      };
    case SAVE_LOGIN_INIT:
      return {
        ...state,
        loading: true,
        error: null,
        auth: false
      };
    case SAVE_LOGIN_SUCCESS: {
      const auth = action.payloadSave.status === 200 ? true : false;
      if (auth) {
        saveLocalState({ key: "auth", value: auth });
        saveLocalState({ key: "user", value: action.payloadSave.data.user });
      }
      let error = false;
      if (action.payloadSave.status === 401) {
        error = true;
      }
      return {
        ...state,
        loading: false,
        message: error,
        auth: action.payloadSave.status === 200 ? true : false
      };
    }
    case SAVE_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        auth: false
      };
    case SAVE_REGISTER_INIT:
      return {
        ...state,
        loadingRegister: true
      };
    case SAVE_REGISTER_SUCCESS: {
      return {
        ...state,
        dataRegister: action.payload.data,
        loadingRegister: false,
        statusRegister: action.payload.status
      };
    }
    case SAVE_REGISTER_FAILURE:
      return {
        ...state,
        dataRegister: {},
        loadingRegister: false,
        statusRegister: 501
      };
    case SAVE_FORGET_INIT:
      return {
        ...state,
        loadingForget: true
      };
    case SAVE_FORGET_SUCCESS: {
      return {
        ...state,
        dataForget: action.payload.data,
        loadingForget: false,
        statusForget: action.payload.status
      };
    }
    case SAVE_FORGET_FAILURE:
      return {
        ...state,
        dataForget: {},
        loadingForget: false,
        statusForget: 501
      };
    default:
      return state;
  }
}

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '@store/actionTypes/authActionTypes'
import { AuthActions, AuthState } from '@store/types/authTypes'

const initialState: AuthState = {
  error: null,
  pending: false,
  token: '',
}

const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
        token: '',
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        token: action.payload.token,
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        token: action.payload.token,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
        token: '',
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducers

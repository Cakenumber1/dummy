import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '@store/actionTypes/authActionTypes'
import {
  LoginFailure,
  LoginFailurePayload,
  LoginPayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
  SignupFailure,
  SignupFailurePayload,
  SignupPayload,
  SignupRequest,
  SignupSuccess,
  SignupSuccessPayload,
} from '@store/types/authTypes'

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  payload,
  type: LOGIN_REQUEST,
})

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  payload,
  type: LOGIN_SUCCESS,
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  payload,
  type: LOGIN_FAILURE,
})

export const signupRequest = (payload: SignupPayload): SignupRequest => ({
  payload,
  type: SIGNUP_REQUEST,
})

export const signupSuccess = (
  payload: SignupSuccessPayload,
): SignupSuccess => ({
  payload,
  type: SIGNUP_SUCCESS,
})

export const signupFailure = (
  payload: SignupFailurePayload,
): SignupFailure => ({
  payload,
  type: SIGNUP_FAILURE,
})

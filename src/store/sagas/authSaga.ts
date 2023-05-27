import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from '@store/actionCreators/authActionCreators'
import { LOGIN_REQUEST, SIGNUP_REQUEST } from '@store/actionTypes/authActionTypes'
import { IAuth } from '@store/types/authTypes'

const login = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post<IAuth>(
    'https://reqres.in/api/login',
    { email: payload.email, password: payload.password },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
  return data
}

const signup = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post<IAuth>(
    'https://reqres.in/api/register',
    { ...payload },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )

  return data
}

function* loginSaga(action: any) {
  try {
    const response: { token: string } = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    })

    yield put(
      loginSuccess({
        token: response.token,
      }),
    )
    action.payload.callback(response.token)
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      }),
    )
  }
}

function* signupSaga(action: any) {
  try {
    const response: { token: string } = yield call(signup, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    })

    yield put(
      signupSuccess({
        token: response.token,
      }),
    )
    action.payload.callback(response.token)
  } catch (e: any) {
    yield put(
      signupFailure({
        error: e.message,
      }),
    )
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)])
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)])
}

export default authSaga

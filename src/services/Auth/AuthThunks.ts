import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstence } from "../../common/axios/Interceptors"
import { ErrorMsgResponse } from "../../common/models/interfaces/Common"
import { RootState } from '../../store/Reducers'
import {
  LoginPayload,
  LoginResponse,
  PasswordResetRequestPayload,
  PasswordResetRequestResponse,
  RefreshPayload,
  RefreshResponse,
  RegisterPayload,
  RegisterResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
  VerifyEmailPayload,
  VerifyEmailResponse
} from "./AuthModels"
import { message } from "antd"

export const authThunks = () => {

  /* const login = createAsyncThunk<
    LoginResponse,
    LoginPayload,
    { rejectValue: ErrorMsgResponse }
  >(
    '/v1/auth/signin',
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await apiInstence.post<LoginResponse>(
          '/v1/auth/signin',
          payload
        )
        localStorage.setItem('accessToken', data.tokens.accessToken || '')
        localStorage.setItem('firstName', data.user.firstName || '')
        localStorage.setItem('lastName', data.user.lastName || '')
        localStorage.setItem('email', data.user.email || '')

        return data
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  ) */
  const login = createAsyncThunk<
    string,
    string,
    { rejectValue: ErrorMsgResponse }
  >(
    '/v1/auth/signin',
    async (payload, { rejectWithValue }) => {
      try {
        localStorage.setItem('accessToken', "true")

        return ""
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const register = createAsyncThunk<
    RegisterResponse,
    RegisterPayload,
    { rejectValue: ErrorMsgResponse }
  >(
    '/v1/auth/signup',
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await apiInstence.post<RegisterResponse>(
          '/v1/auth/signup',
          payload
        )
        message.success('Usuario creado exitosamente')
        return data
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const passwordResetRequest = createAsyncThunk<
    PasswordResetRequestResponse,
    PasswordResetRequestPayload,
    { rejectValue: ErrorMsgResponse }
  >(
    'auth/password-reset-request',
    async ({ data, onSuccess }, { rejectWithValue }) => {
      try {
        const { data: response } = await apiInstence.post<PasswordResetRequestResponse>(
          '/auth/password-reset-request',
          data
        )
        onSuccess()
        return response
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const verifyEmail = createAsyncThunk<
    VerifyEmailResponse,
    VerifyEmailPayload,
    { rejectValue: ErrorMsgResponse }
  >(
    'auth/verify-email',
    async ({ data, onSuccess }, { rejectWithValue }) => {
      try {
        const { data: response } = await apiInstence.post<VerifyEmailResponse>(
          `/auth/verify-email`,
          data
        )
        onSuccess()
        return response
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const resetPassword = createAsyncThunk<
    ResetPasswordResponse,
    ResetPasswordPayload,
    { rejectValue: ErrorMsgResponse, state: RootState }
  >(
    'auth/reset-password',
    async ({ password, onSuccess }, { rejectWithValue, getState }) => {
      try {
        const { auth: { passwordReset } } = getState()
        const { data: response } = await apiInstence.post(
          '/auth/reset-password',
          { ...passwordReset, password }
        )
        onSuccess()
        return response
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const refresh = createAsyncThunk<
    RefreshResponse,
    RefreshPayload,
    { rejectValue: ErrorMsgResponse }
  >(
    '/v1/auth/refresh',
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await apiInstence.post<RefreshResponse>(
          '/v1/auth/refresh',
          payload
        )
        return data
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  return {
    login,
    register,
    passwordResetRequest,
    verifyEmail,
    resetPassword,
    refresh
  }
}
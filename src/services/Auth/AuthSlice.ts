import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authThunks } from './AuthThunks'
import { authInitialState } from './AuthInitialState'
import { AuthModulesTypes, AuthStateTypes } from './AuthModels'

const initialState = authInitialState()
const thunks = authThunks()
const { login, register, passwordResetRequest, verifyEmail, resetPassword, refresh } = thunks

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus(state: AuthStateTypes, { payload }: PayloadAction<AuthModulesTypes>) {
      state.error[payload] = initialState.error[payload]
      state.status[payload] = initialState.status[payload]
    },
    logOut(state: AuthStateTypes) {
      state.isAuthenticated = false
      localStorage.removeItem('accessToken')
      window.location.reload()
      window.location.href = '/';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status.login = 'loading'
        state.error.login = null
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status.login = 'idle'
        window.location.reload()
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status.login = 'error'
        state.error.login = payload?.message
      })
      .addCase(register.pending, (state, { payload }) => {
        state.status.register = 'loading'
        state.error.register = null
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status.register = 'success'
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.status.register = 'error'
        state.error.register = payload?.message
      })
      .addCase(passwordResetRequest.pending, (state) => {
        state.status.passwordResetRequest = 'loading'
        state.error.passwordResetRequest = null
        state.passwordReset.email = null
      })
      .addCase(passwordResetRequest.fulfilled, (state, { payload }) => {
        state.status.passwordResetRequest = 'idle'
        state.passwordReset.email = payload.email
      })
      .addCase(passwordResetRequest.rejected, (state, { payload }) => {
        state.status.passwordResetRequest = 'error'
        state.error.passwordResetRequest = payload?.message
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status.verifyEmail = 'loading'
        state.error.verifyEmail = null
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        state.status.verifyEmail = 'idle'
        
        state.passwordReset.code = payload.code
      })
      .addCase(verifyEmail.rejected, (state, { payload }) => {
        state.status.verifyEmail = 'error'
        state.error.verifyEmail = payload?.message
      })
      .addCase(resetPassword.pending, (state) => {
        state.status.resetPassword = 'loading'
        state.error.resetPassword = null
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.status.resetPassword = 'idle'
        state.authe.tokens.accessToken = payload.tokens.accessToken
        state.isAuthenticated = true
        state.passwordReset = initialState.passwordReset
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.status.resetPassword = 'error'
        state.error.resetPassword = payload?.message
      })
      .addCase(refresh.pending, (state) => {
        state.status.refresh = 'loading'
        state.error.refresh = null
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.status.refresh = 'idle'
        state.authe.tokens.accessToken = payload.tokens.accessToken
        state.authe.tokens.refreshToken = payload.tokens.refreshToken
        state.authe.user.firstName = payload.user.firstName
        state.authe.user.lastName = payload.user.lastName
        state.authe.user.email = payload.user.email
        state.isAuthenticated = true
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.status.refresh = 'error'
        state.error.refresh = payload?.message
        state.authe.tokens.accessToken = null
        state.authe.tokens.refreshToken = null
        state.authe.user.firstName = null
        state.authe.user.lastName = null
        state.authe.user.email = null
        state.isAuthenticated = false
      })
  }
})

const authActions = { ...authSlice.actions, ...thunks }
const authReducer = authSlice.reducer

export { authActions, authReducer }
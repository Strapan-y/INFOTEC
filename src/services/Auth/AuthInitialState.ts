import { AuthStateTypes } from "./AuthModels"

export const authInitialState = (): AuthStateTypes => ({
  isAuthenticated: false,
  authe: {
    user: {
      firstName: null,
      lastName: null,
      email: null
    },
    tokens: {
      accessToken: null,
      refreshToken: null,
    },
  },
  passwordReset: {
    email: null,
    code: null
  },
  error: {
    login: null,
    register: null,
    passwordResetRequest: null,
    verifyEmail: null,
    resetPassword: null,
    refresh: null,
  },
  status: {
    login: 'idle',
    register: 'idle',
    passwordResetRequest: 'idle',
    verifyEmail: 'idle',
    resetPassword: 'idle',
    refresh: 'idle',
  }
})
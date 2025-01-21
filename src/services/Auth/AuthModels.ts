import { OnSuccessCallback } from "../../common/models/interfaces/Common"
import { StatusTypes } from "../../common/models/types/Common"

export type AuthModulesTypes = 'login' | 'passwordResetRequest' | 'verifyEmail' | 'resetPassword' | 'register'

export interface AuthStateTypes {
  isAuthenticated: boolean,
  authe: {
    user: {
      firstName: string | null,
      lastName: string | null,
      email: string | null
    },
    tokens: {
      accessToken: string | null,
      refreshToken: string | null,
    },
  },
  passwordReset: {
    email: string | null,
    code: string | null,
  },
  error: {
    login: string | null | undefined,
    register: string | null | undefined,
    passwordResetRequest: string | null | undefined,
    verifyEmail: string | null | undefined,
    resetPassword: string | null | undefined,
    refresh: string | null | undefined,
  },
  status: {
    login: StatusTypes,
    register: StatusTypes,
    passwordResetRequest: StatusTypes,
    verifyEmail: StatusTypes,
    resetPassword: StatusTypes,
    refresh: StatusTypes,
  }
}

export interface LoginPayload {
  email: string,
  password: string
}

export interface RegisterPayload {
  name: string,
  lastName: string,
  email: string,
  password: string,
  confPassword?: string
}

export interface LoginResponse {
  user: {
    firstName: string | null,
    lastName: string | null,
    email: string | null
  },
  tokens: {
    accessToken: string | null,
    refreshToken: string | null,
  },
}

export interface RegisterResponse {
  user: {
    firstName: string,
    lastName: string,
    email: string
  },
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}

export interface PasswordResetRequestPayload extends OnSuccessCallback {
  data: { email: string }
}

export interface PasswordResetRequestResponse {
  email: string
}

export interface VerifyEmailPayload extends OnSuccessCallback {
  data: { email: string, code: string }
}

export interface VerifyEmailResponse {
  code: string
}

export interface ResetPasswordPayload extends OnSuccessCallback {
  password: string
}

export interface ResetPasswordResponse extends LoginResponse { }

export interface RefreshPayload { }
export interface RefreshResponse {
  user: {
    firstName: string | null,
    lastName: string | null,
    email: string | null
  },
  tokens: {
    accessToken: string | null,
    refreshToken: string | null,
  },
}
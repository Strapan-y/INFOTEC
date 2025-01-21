import axios, { Axios, AxiosHeaders, InternalAxiosRequestConfig } from 'axios'
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { ErrorMsgResponse } from '../models/interfaces/Common'
import { apiUrl } from "../config/Environments"
import { AppStore } from '../../store/Store'

const defaultErrorMessage = `Lo sentimos! Tenemos un error inesperado. Por favor intentelo más tarde.`

let store: AppStore
export const injectStore = (_store: AppStore) => {
  store = _store
}

let headers = new AxiosHeaders()
headers.set('Content-Type', 'application/json');
headers.set('Authorization', 'Bearer miTokenDeAcceso');
headers.set('Accept', 'application/json');

const onRequest = (value: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  value.baseURL = apiUrl  //https://api.info-dash.lat
  value.headers = headers
  
  return value
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  const errorMsg = error.response?.data || defaultErrorMessage
  return Promise.reject(errorMsg)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = (error: AxiosError<ErrorMsgResponse>): Promise<string> => {
  const errorMsg = error.response?.data?.message || defaultErrorMessage
  return Promise.reject(errorMsg)
}

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}

export const apiInstence = axios.create()
setupInterceptorsTo(apiInstence)
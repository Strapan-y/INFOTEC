export interface ErrorMsgResponse {
  message: string
}

export interface OnSuccessCallback {
  onSuccess: () => void
}

interface PageMeta {
  page: number
  take: number
  itemCount: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export interface Page<Data> {
  meta: PageMeta
  data: Data
}
export interface AuthModel {
  key: string
  api_token: string
  status: string
  message: string
  refreshToken: string | undefined
}

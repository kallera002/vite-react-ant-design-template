import { AUTH_KEY, REFRESH_KEY } from '../constant/envVariable'
import { AuthModel } from '../types/localstorage'

/**
 * * get data Auth from Localstorage
 * @returns AuthModel | undefined
 */
const getAuthItem = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(btoa(AUTH_KEY))
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

/**
 * * get refresh token from Localstotage
 * @returns string | undefined
 */
const getRefreshToken = (): string | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(btoa(REFRESH_KEY))
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      return auth?.refreshToken
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

/**
 * * set Auth user to Localstorage
 * @param auth
 * @returns
 */
const setAuth = (auth: { api_token: string }) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(btoa(AUTH_KEY), lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

/**
 * * set refresh token to Localstorage
 * @param auth
 * @returns
 */
const setRefresh = (refreshToken: { refreshToken: string }) => {
  if (!localStorage) {
    return
  }
  try {
    const lsValue = JSON.stringify(refreshToken)
    localStorage.setItem(btoa(REFRESH_KEY), lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

/**
 * * remove AUTH user from Localstorage
 * @returns
 */
const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export { getAuthItem, getRefreshToken, setRefresh, removeAuth, setAuth }

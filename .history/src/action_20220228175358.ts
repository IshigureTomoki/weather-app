export const FETCH_ = 'FETCH_COUNTRY'
export const SUCCESS_COUNTRY_API = 'SUCCESS_COUNTRY_API'
export const FAIL_COUNTRY_API = 'FAIL_COUNTRY_API'

export const fetchCountry = () => {
  return {
    type: FETCH_COUNTRY,
    items: []
  }
}

export const successCountryApi = (response) => {
  return {
    type: SUCCESS_COUNTRY_API,
    items: response
  }
}

export const failCountryApi = (error) => {
  return {
    type: FAIL_COUNTRY_API,
    items: error
  }
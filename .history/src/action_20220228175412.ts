export const FETCH_LOCATION = 'FETCH_COUNTRY'
export const SUCCESS_LOCATIONCOUNTRY_API = 'SUCCESS_COUNTRY_API'
export const FAIL_LOCATION_API = 'FAIL_COUNTRY_API'

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
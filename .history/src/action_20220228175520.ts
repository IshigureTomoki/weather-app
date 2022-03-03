export const FETCH_LOCATION = 'FETCH_LOCATION'
export const SUCCESS_LOCATION_API = 'SUCCESS_LOCATION_API'
export const FAIL_LOCATION_API = 'FAIL_LOCATION_API'

export const fetchLocation= () => {
  return {
    type: FETCH_LOCATION,
    items: []
  }
}

export const successLocationApi = (response) => {
  return {
    type: SUCCESS_LOCATION_API,
    items: response
  }
}

export const failCountryApi = (error) => {
  return {
    type: FAIL_LOCATION_API,
    items: error
  }
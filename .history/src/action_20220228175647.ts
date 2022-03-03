export const FETCH_LOCATION = 'FETCH_LOCATION'
export const SUCCESS_LOCATION_API = 'SUCCESS_LOCATION_API'
export const FAIL_LOCATION_API = 'FAIL_LOCATION_API'

export const fetchLocation= () => {
  return {
    type: FETCH_LOCATION,
    items: []
  }
}

export const successLocationApi = (response:any) => {
  return {
    type: SUCCESS_LOCATION_API,
    items: response
  }
}

export const failLocationApi = (error:any) => {
  return {
    type: FAIL_LOCATION_API,
    items: error
  }
}
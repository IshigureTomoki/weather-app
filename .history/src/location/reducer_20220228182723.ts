import { FETCH_LOCATION, SUCCESS_LOCATION_API, FAIL_COUNTRY_API } from './action'

const initialState = {
  type: '',
  items: []
}

const countryState = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      state.type = action.type
      state.items = action.items
      return Object.assign({}, state)
    case SUCCESS_COUNTRY_API:
      state.type = action.type
      state.items = action.items
      return Object.assign({}, state)
    case FAIL_COUNTRY_API:
      state.type = action.type
      state.items = action.items
      return Object.assign({}, state)
    default:
      return state
  }
}

export default countryState
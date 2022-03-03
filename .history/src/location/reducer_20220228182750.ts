import { FETCH_LOCATION, SUCCESS_LOCATION_API, FAIL_LOCATION_API } from './action'

const initialState = {
  type: '',
  items: []
}

const countryState = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_LOCATION:
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
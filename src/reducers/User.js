import * as ACTION_TYPES from '~/actions/types'

const initialState = {
  postRes: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.POST_FAUCET:
      return {
        ...state,
        postRes: action.data
      }
    default:
      return state
  }
}

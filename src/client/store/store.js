import { createStore } from 'redux'
import { initialState } from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  default:
    return state
  }
}

export const store = createStore(reducer);

import { createStore } from 'redux';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TOPIC':
    return addTopic(state, action.topic);
  default:
    return state;
  }
};

export const store = createStore(reducer);

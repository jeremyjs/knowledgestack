import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { initialState } from './initialState';
import { addResource, addTopic, setIsAddingResource, addResourceToCurriculum } from './helpers';
import { ADD_RESOURCE, ADD_TOPIC, SET_IS_ADDING_RESOURCE, ADD_RESOURCE_TO_CURRICULUM } from './actions';
import { subscribeToServices } from './subscribeToServices';

const enhancer = compose(
  /* [middlewares], */
  persistState()
);

const reducer = (state, action) => {
  console.log('action, state:', action, state);
  switch (action.type) {
  case ADD_TOPIC:
    return addTopic(state, action.payload);

  case ADD_RESOURCE:
    return addResource(state, action.payload);

  case SET_IS_ADDING_RESOURCE:
    return setIsAddingResource(state, action.payload);

  case ADD_RESOURCE_TO_CURRICULUM:
    return addResourceToCurriculum(state, action.payload.resourceId, action.payload.curriculumId);

  default:
    return state;
  }
};

export const store = subscribeToServices(createStore(reducer, initialState, enhancer));

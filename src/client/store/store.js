import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { initialState } from './initialState';
import { addCurriculum, addResource, addResourceToCurriculum, addTopic, setAddingCurriculumTopicId, setIsAddingResource, setIsAddingTopic } from './helpers';
import { ADD_CURRICULUM, ADD_RESOURCE, ADD_RESOURCE_TO_CURRICULUM, ADD_TOPIC, SET_ADDING_CURRICULUM_TOPIC_ID, SET_IS_ADDING_RESOURCE, SET_IS_ADDING_TOPIC } from './actions';
import { subscribeToServices } from './subscribeToServices';

const enhancer = compose(
  /* [middlewares], */
  persistState()
);

const reducer = (state, action) => {
  console.log('action, state:', action, state);
  switch (action.type) {
  case ADD_CURRICULUM:
    return addCurriculum(state, action.payload);

  case ADD_RESOURCE:
    return addResource(state, action.payload);

  case ADD_RESOURCE_TO_CURRICULUM:
    return addResourceToCurriculum(state, action.payload.resourceId, action.payload.curriculumId);

  case ADD_TOPIC:
    return addTopic(state, action.payload);

  case SET_ADDING_CURRICULUM_TOPIC_ID:
    return setAddingCurriculumTopicId(state, action.payload);

  case SET_IS_ADDING_RESOURCE:
    return setIsAddingResource(state, action.payload);

  case SET_IS_ADDING_TOPIC:
    return setIsAddingTopic(state, action.payload);

  default:
    return state;
  }
};

export const store = subscribeToServices(createStore(reducer, initialState, enhancer));

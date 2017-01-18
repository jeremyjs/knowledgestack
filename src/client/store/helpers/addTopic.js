import _ from 'lodash';

export const addTopic = (state, topic) => _.assign({}, state, { topics: [ topic, ...state.topics ] });

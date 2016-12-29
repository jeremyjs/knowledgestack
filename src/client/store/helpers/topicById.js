import _ from 'lodash';

export const topicById = (state, topicId) => _.find(state.topics, { _id: topicId });

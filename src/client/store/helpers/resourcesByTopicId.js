import _ from 'lodash';

const resourcesByTopicId = (state, topicId) => _.filter(state.resources, { topicId });

import _ from 'lodash';

export const curriculumTopic = (state, curriculum) => _.find(state.topics, { _id: curriculum.topicId });

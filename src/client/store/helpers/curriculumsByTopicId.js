import _ from 'lodash';

export const curriculumsByTopicId = (state, topicId) => {
  console.log(state);
  return _.filter(state.curriculums, { topicId });
};

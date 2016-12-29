import _ from 'lodash';

export const curriculaeByTopicId = (state, topicId) => {
  console.log(state);
  return _.filter(state.curriculae, { topicId });
};

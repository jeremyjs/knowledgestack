export const setAddingCurriculumTopicId = (state, { topicId }) => (
  _.assign({}, state, { newCurriculum: { topicId } })
);

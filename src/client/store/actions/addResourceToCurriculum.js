export const ADD_RESOURCE_TO_CURRICULUM = 'ADD_RESOURCE_TO_CURRICULUM';

export const addResourceToCurriculum = ({ curriculumId, resourceId }) => ({
  type: ADD_RESOURCE_TO_CURRICULUM,
  payload: { curriculumId, resourceId },
});

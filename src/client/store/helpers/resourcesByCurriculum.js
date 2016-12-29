import _ from 'lodash';

export const resourcesByCurriculum = (state, curriculum) => _.filter(
  state.resources,
  resource => _.includes(curriculum.resourceIds, resource._id)
);

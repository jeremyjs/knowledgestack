import _ from 'lodash';

export const curriculumById = (state, curriculumId) => _.find(state.curriculae, { _id: curriculumId });

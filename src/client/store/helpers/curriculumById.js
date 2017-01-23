import _ from 'lodash';

export const curriculumById = (state, curriculumId) => _.find(state.curriculums, { _id: curriculumId });

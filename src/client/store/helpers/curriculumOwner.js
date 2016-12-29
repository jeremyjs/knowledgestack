import _ from 'lodash';

export const curriculumOwner = (state, curriculum) => _.find(state.users, { _id: curriculum.ownerId });

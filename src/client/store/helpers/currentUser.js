import _ from 'lodash';

export const currentUser = (state) => _.find(state.users, { _id: state.currentUserId });

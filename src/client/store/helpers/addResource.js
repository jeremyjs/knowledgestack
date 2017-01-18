import _ from 'lodash';

export const addResource = (state, resource) => _.assign({}, state, { resources: [ resource, ...state.resources ] });

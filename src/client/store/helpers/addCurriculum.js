import _ from 'lodash';

export const addCurriculum = (state, curriculum) => _.assign({}, state, { curriculums: [ curriculum, ...state.curriculums ] });

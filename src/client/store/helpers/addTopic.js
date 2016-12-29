export const addTopic = (state, topic) => _.assign({}, state, { topics: [ topic, ...state.topics ] });

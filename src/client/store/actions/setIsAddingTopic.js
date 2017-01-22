export const SET_IS_ADDING_TOPIC = 'SET_IS_ADDING_TOPIC';

export const setIsAddingTopic = (bool) => ({
  type: SET_IS_ADDING_TOPIC,
  payload: { isAddingTopic: bool },
});

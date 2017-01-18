export const SET_IS_ADDING_RESOURCE = 'SET_IS_ADDING_RESOURCE';

export const setIsAddingResource = (bool) => ({
  type: SET_IS_ADDING_RESOURCE,
  payload: { isAddingResource: bool },
});

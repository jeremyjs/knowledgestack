import { resourceService } from '../api/resources';
import { addResource } from './actions';

export const subscribeToServices = (store) => {
  resourceService.on('created', resource => {
    console.log('[event] resource created:', resource);
    store.dispatch(addResource(resource));
  });

  return store;
};

import { resourceService } from '../api/resources';
import { topicService } from '../api/topics';
import { addResource, addTopic } from './actions';

export const subscribeToServices = (store) => {
  resourceService.on('created', resource => {
    console.log('[event] resource created:', resource);
    store.dispatch(addResource(resource));
  });

  topicService.on('created', topic => {
    console.log('[event] topic created:', topic);
    store.dispatch(addTopic(topic));
  });

  return store;
};

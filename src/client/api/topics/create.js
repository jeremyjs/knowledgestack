import { topicService } from './service';

// Creates a new topic on the Feathers server and returns the _id
export const createTopic = (topic) => {
  console.log('topic:', topic)
  return (
    topicService.create(topic).then(res => res._id)
  );
}

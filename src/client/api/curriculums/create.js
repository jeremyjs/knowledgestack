import { curriculumService } from './service';

// Creates a new curriculum on the Feathers server and returns the _id
export const createCurriculum = (curriculum) => {
  console.log('curriculum:', curriculum)
  return (
    curriculumService.create(curriculum).then(res => res._id)
  );
}

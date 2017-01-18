export const initialState = {
  currentCurriculum: { isAddingResource: false },
  currentUserId: '0',
  users: [
    { _id: '0', username: 'jeremyjs', email: 'jeremypatrickmeyer@gmail.com' },
  ],
  topics: [
    { _id: '1', title: 'Chemistry' },
    { _id: '2', title: 'Mathematics' },
    { _id: '3', title: 'Rationality' },
  ],
  curriculae: [
    { _id: '4', ownerId: '0', topicId: '1', rating: 5, resourceIds: ['11', '12'] },
    { _id: '5', ownerId: '0', topicId: '1', rating: 3, resourceIds: [] },
    { _id: '6', ownerId: '0', topicId: '2', rating: 5, resourceIds: ['13'] },
    { _id: '7', ownerId: '0', topicId: '2', rating: 4, resourceIds: [] },
    { _id: '8', ownerId: '0', topicId: '3', rating: 5, resourceIds: [] },
    { _id: '9', ownerId: '0', topicId: '3', rating: 4, resourceIds: [] },
    { _id: '10', ownerId: '0', topicId: '3', rating: 3, resourceIds: [] },
  ],
  resources: [
    { _id: '11', title: 'Khan Academy - Chemistry', url: 'https://www.khanacademy.org/science/chemistry' },
    { _id: '12', title: 'Khan Academy - Organic Chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry' },
    { _id: '13', title: 'Khan Academy - Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
  ],
};

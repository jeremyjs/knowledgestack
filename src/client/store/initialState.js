export const initialState = {
  users: [
    { _id: '0', username: 'jeremyjs', email: 'jeremypatrickmeyer@gmail.com' },
  ],
  topics: [
    { _id: '1', title: 'Chemistry' },
    { _id: '2', title: 'Mathematics' },
    { _id: '3', title: 'Rationality' },
  ],
  curriculae: [
    { _id: '4', topicId: '1', rating: 5 },
    { _id: '5', topicId: '1', rating: 3 },
    { _id: '6', ownerId: '0', topicId: '2', rating: 5, resourceIds: ['11'] },
    { _id: '7', topicId: '2', rating: 4 },
    { _id: '8', topicId: '3', rating: 5 },
    { _id: '9', topicId: '3', rating: 4 },
    { _id: '10', topicId: '3', rating: 3 },
  ],
  resources: [
    { _id: '11', title: 'Khan Academy - Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
  ],
};

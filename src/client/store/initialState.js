export const initialState = {
  currentCurriculum: { isAddingResource: false },
  currentUserId: '0',
  users: [
    {
      _id: '0',
      username: 'jeremyjs',
      givenName: 'Jeremy',
      familyName: 'Meyer',
      emailAddress: 'jeremypatrickmeyer@gmail.com',
    },
  ],
  topics: [
    { _id: '1', title: 'Chemistry', imgUrl: 'http://kingofwallpapers.com/chemistry/chemistry-005.jpg' },
    { _id: '2', title: 'Mathematics', imgUrl: 'http://www.basicknowledge101.com/photos/2016/mathchalkboard.jpg' },
    { _id: '3', title: 'Rationality', imgUrl: 'http://crucialconsiderations.org/wp-content/uploads/2015/06/bayes3x2.jpg' },
  ],
  curriculae: [
    { _id: '4', title: 'Basic Chemistry', subtitle: 'For Grade Schoolers', ownerId: '0', topicId: '1', rating: 5, resourceIds: ['11', '12'] },
    { _id: '5', title: 'Organic Chemistry', subtitle: 'For Professional Chemists', ownerId: '0', topicId: '1', rating: 3, resourceIds: [] },
    { _id: '6', title: '', ownerId: '0', topicId: '2', rating: 5, resourceIds: ['13'] },
    { _id: '7', title: '', ownerId: '0', topicId: '2', rating: 4, resourceIds: [] },
    {
      _id: '8',
      title: 'Introduction to Rationality',
      description: 'A basic course in becoming more rational. Starts with some low hanging fruit you can implement in your daily life. Then gives you the foundations you need to learn the rest on your own. Other courses claim you need to get worse before you get better. This one avoids that approach.',
      ownerId: '0',
      topicId: '3',
      rating: 5,
      resourceIds: [],
    },
  ],
  resources: [
    { _id: '11', title: 'Khan Academy - Chemistry', url: 'https://www.khanacademy.org/science/chemistry' },
    { _id: '12', title: 'Khan Academy - Organic Chemistry', url: 'https://www.khanacademy.org/science/organic-chemistry' },
    { _id: '13', title: 'Khan Academy - Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
  ],
};

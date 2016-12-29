import React from 'react';
import { curriculumUrl } from '../../routes';

export const CurriculumItem = (curriculum) => (
  <li key={curriculum._id} className="curriculum-item">
    <a href={curriculumUrl(curriculum)}>
      {curriculum.rating}
    </a>
  </li>
);

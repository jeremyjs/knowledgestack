import React from 'react';
import { CurriculumItem } from '../../components/curriculae';

export const CurriculumList = ({ curriculae }) => (
  <ul className="curriculum-list">
    {curriculae.map(curriculum => <CurriculumItem key={curriculum._id} {...curriculum} />)}
  </ul>
);

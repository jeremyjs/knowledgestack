import React from 'react';
import { CurriculumItem } from '../../components/curriculae';

export const CurriculumList = ({ curriculae }) => (
  <div className="curriculum-list">
    {curriculae.map(curriculum => <CurriculumItem key={curriculum._id} {...curriculum} />)}
  </div>
);

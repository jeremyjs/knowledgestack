import React from 'react';
import { CurriculumItem } from '../../components/curriculums';

export const CurriculumList = ({ curriculums }) => (
  <div className="curriculum-list">
    {curriculums.map(curriculum => <CurriculumItem key={curriculum._id} {...curriculum} />)}
  </div>
);

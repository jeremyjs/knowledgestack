import React from 'react';
import { topicUrl } from '../../../client/lib/topicUrl'

export const Topics = ({ topics }) => (
  <ul className="topics">
    {topics.map(topic => (
      <li key={topic._id} className="topic"><a href={topicUrl(topic)}>{topic.title}</a></li>
    ))}
  </ul>
);

import React from 'react';
import { topicUrl } from '../../routes';

export const TopicList = ({ topics }) => (
  <ul className="topic-list">
    {topics.map(topic => (
      <li key={topic._id} className="topic"><a href={topicUrl(topic)}>{topic.title}</a></li>
    ))}
  </ul>
);

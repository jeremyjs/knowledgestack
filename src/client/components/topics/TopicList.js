import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { topicUrl } from '../../routes';

export const TopicList = ({ topics }) => (
  <GridList className="topic-list" padding={4} cols={3} cellHeight={320}>
    {topics.map(topic => (
      <a key={topic._id} href={topicUrl(topic)}>
        <GridTile title={topic.title} className="topic">
          <img src={topic.imgUrl} />
        </GridTile>
      </a>
    ))}
  </GridList>
);

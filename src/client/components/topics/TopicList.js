import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { topicUrl } from '../../routes';

const tileStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 10px 2px',
  transition: '.2s',
};

export const TopicList = ({ topics }) => (
  <div className="topic-list-container">
    <style>
      {`
        .topic:hover {
          box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px 3px !important;
        }
      `}
    </style>
    <GridList className="topic-list" padding={10} cols={3} cellHeight={320}>
      {topics.map(topic => (
        <a key={topic._id} href={topicUrl(topic)}>
          <GridTile title={topic.title} className="topic" style={tileStyle}>
            <img src={topic.imgUrl} />
          </GridTile>
        </a>
      ))}
    </GridList>
  </div>
);

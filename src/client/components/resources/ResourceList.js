import React from 'react';
import { ResourceItem } from '../../components/resources';

const ulStyle = {
  listStyleType: 'none',
  margin: '20px 0',
  padding: '0',
};

export const ResourceList = (props) => (
  <ul className="resource-list" style={ulStyle}>
    {props.resources.map(resource => <ResourceItem key={resource._id} {...resource} />)}
  </ul>
);

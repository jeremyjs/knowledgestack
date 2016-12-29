import React from 'react';
import { ResourceItem } from '../../components/resources';

export const ResourceList = (props) => (
  <ul className="resource-list">
    {props.resources.map(resource => <ResourceItem key={resource._id} {...resource} />)}
  </ul>
);

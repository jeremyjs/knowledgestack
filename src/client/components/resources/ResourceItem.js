import React from 'react';

export const ResourceItem = (resource) => (
  <li className="resource-item" style={{ marginBottom: '4px' }}>
    <a href={resource.url}>
      {resource.title}
    </a>
  </li>
);

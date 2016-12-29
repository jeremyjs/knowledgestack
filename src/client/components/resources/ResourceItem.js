import React from 'react';

export const ResourceItem = (resource) => (
  <li className="resource-item">
    <a href={resource.url}>
      {resource.title}
    </a>
  </li>
);

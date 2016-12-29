import React, { Component } from 'react';

export const ResourceItem = (resource) => (
  <li className="curriculum-item">
    <a href={resource.url}>
      {resource.title}
    </a>
  </li>
);

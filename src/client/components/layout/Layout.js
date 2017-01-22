import React from 'react';
import { TopBar, Breadcrumbs } from '../layout';

const mainContainerStyle = {
  padding: '0 40px',
};

const crumbs = [
  { title: 'Topics' },
];

export const Layout = (props) => (
  <div className="layout-container">
    <TopBar />
    <div className="main-container" style={mainContainerStyle}>
      {props.children}
    </div>
  </div>
);

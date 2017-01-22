import React from 'react';
import _ from 'lodash';

const breadcrumbsStyle = {
  display: 'flex',
  marginTop: '20px',
  marginBottom: '20px',
  height: '18px',
};

const crumbStyle = {
  marginRight: '10px',
};

const dividerStyle = {
  marginRight: '10px',
};

const CrumbElement = ({ title, linkUrl }) => (
  <div style={crumbStyle} className="crumb">
    {linkUrl ?
      <a href={linkUrl}>{title}</a>
    :
      title
    }
  </div>
);

const Divider = (
  <div style={dividerStyle} className="divider">&gt;</div>
);

const dividerArray = (numDividers) => Array(numDividers).fill(Divider);

const divided = (crumbElements) => (
  _.zip(crumbElements, dividerArray(crumbElements.length - 1))
);

export const Breadcrumbs = (props) => (
  <nav className="breadcrumbs" style={breadcrumbsStyle}>
    {divided(props.crumbs.map(CrumbElement))}
  </nav>
);

export const rootCrumb = { title: 'Topics', linkUrl: '/' };

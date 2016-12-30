import React from 'react';
import { TopBar } from './TopBar';

export const Layout = ({ children }) => (
  <div className="layout-container">
    <TopBar />
    <div className="main-container" style={{ padding: '40px' }}>
      {children}
    </div>
  </div>
);

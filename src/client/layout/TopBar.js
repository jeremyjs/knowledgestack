import React from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';
import AppBar from 'material-ui/AppBar';

// const mapStateToProps = (state, ownProps) => _.pick(state, 'topics');
// const mapDispatchToProps = null;

export const TopBar = (props) => (
  <AppBar
    title="Knowledgetree"
    iconClassNameRight="muidocs-icon-navigation-expand-more" />
);

// export const Topbar = connect(mapStateToProps, mapDispatchToProps)(Topbar);

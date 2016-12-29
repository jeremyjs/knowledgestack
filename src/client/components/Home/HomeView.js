import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TopicList } from '../topics';

const mapStateToProps = (state, ownProps) => _.pick(state, 'topics');
const mapDispatchToProps = null;

const HomePresenter = (props) => (
  <div className="home-container">
    <h1>Topics</h1>
    <TopicList {...props} />
  </div>
);

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(HomePresenter);

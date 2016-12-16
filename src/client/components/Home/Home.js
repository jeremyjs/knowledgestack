import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { Topics } from '../topics';
import { app } from '../../app';

const topicUrl = (topic) => `/topics/${topic._id}`;

const mapStateToProps = (state, ownProps) => _.pick(state, 'topics');
const mapDispatchToProps = null;

const HomePresenter = (props) => (
  <div className="main-container">
    <h1>Topics</h1>
    <Topics {...props} />
  </div>
);

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePresenter);

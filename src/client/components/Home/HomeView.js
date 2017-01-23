import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TopicList } from '../topics';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state, ownProps) => _.pick(state, 'topics');

const mapDispatchToProps = null;

const HomePresenter = (props) => (
  <div className="home-container">
    <h1>Topics</h1>
    <TopicList style={{ marginBottom: '20px' }} {...props} />
    <a href="/topics/new">
      <RaisedButton className="add-topic-button" label="Add Topic" primary={true} />
    </a>
  </div>
);

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(HomePresenter);

import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { CurriculumList } from '../../components/curriculae';
import { topicById, curriculaeByTopicId } from '../../store/helpers';

const style = {
  width: '50%',
  margin: '0 auto',
};

const mapStateToProps = (state, ownProps) => _.assign(
  {},
  topicById(state, ownProps.params._id),
  { curriculae: curriculaeByTopicId(state, ownProps.params._id) }
);

const mapDispatchToProps = {};

const TopicPresenter = (props) => (
  <div className="topic-container" style={style}>
    <h1>{props.title}</h1>
    <CurriculumList curriculae={props.curriculae} />
  </div>
);

export const TopicView = connect(mapStateToProps, mapDispatchToProps)(TopicPresenter);

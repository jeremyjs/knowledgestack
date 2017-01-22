import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { topicById, curriculaeByTopicId } from '../../store/helpers';
import { CurriculumList } from '../../components/curriculae';
import { Breadcrumbs } from '../../components/layout'

const style = {
  width: '50%',
  margin: '0 auto',
};

const mapStateToProps = (state, ownProps) => {
  const topic = topicById(state, ownProps.params._id);
  return _.assign(
    {},
    topic,
    { curriculae: curriculaeByTopicId(state, ownProps.params._id) },
    { crumbs: [ { title: 'Topics', linkUrl: '/' }, { title: topic.title } ] }
  );
};

const mapDispatchToProps = {};

const TopicPresenter = (props) => (
  <div className="topic-container" style={style}>
    <Breadcrumbs crumbs={props.crumbs} />
    <h1>{props.title} Curriculae</h1>
    <CurriculumList curriculae={props.curriculae} />
  </div>
);

export const TopicView = connect(mapStateToProps, mapDispatchToProps)(TopicPresenter);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { curriculumById, curriculumOwner, curriculumTopic, resourcesByCurriculum } from '../../store/helpers';
import { ResourceList } from '../../components/resources';

const mapStateToProps = (state, ownProps) => {
  const curriculum = curriculumById(state, ownProps.params._id);
  return _.assign(
    {},
    curriculum,
    { owner: curriculumOwner(state, curriculum) },
    { topic: curriculumTopic(state, curriculum) },
    { resources: resourcesByCurriculum(state, curriculum) }
  );
};

const mapDispatchToProps = {};

const CurriculumPresenter = (props) => {
  console.log(props)
  return (
    <div className="curriculum-container">
      <h1>{`${props.owner.username}/${props.topic.title}`}</h1>
      <ResourceList resources={props.resources} />
    </div>
  );
};

export const CurriculumView = connect(mapStateToProps, mapDispatchToProps)(CurriculumPresenter);

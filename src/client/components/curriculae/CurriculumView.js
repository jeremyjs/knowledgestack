import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { currentUser, curriculumById, curriculumOwner, curriculumTopic, resourcesByCurriculum } from '../../store/helpers';
import { ResourceList } from '../../components/resources';
import { AddResourceButton, NewResourceItem } from '../../components/curriculae';

const mapStateToProps = (state, ownProps) => {
  const curriculum = curriculumById(state, ownProps.params._id);
  return _.assign(
    {},
    curriculum,
    { currentCurriculum: state.currentCurriculum },
    { currentUser: currentUser(state) },
    { owner: curriculumOwner(state, curriculum) },
    { topic: curriculumTopic(state, curriculum) },
    { resources: resourcesByCurriculum(state, curriculum) }
  );
};

const mapDispatchToProps = {};

const CurriculumPresenter = (props) => (
  <div className="curriculum-container">
    <h1>{`${props.owner.username}/${props.topic.title}`}</h1>
    {(props.resources && props.resources.length > 0) ?
      <ResourceList resources={props.resources} />
    :
      <p>Curriculum is empty.</p>
    }
    {props.currentCurriculum.isAddingResource ?
      <NewResourceItem curriculumId={props._id} />
    : ''}
    {!props.currentCurriculum.isAddingResource && props.owner === props.currentUser ?
      <AddResourceButton curriculumId={props._id} />
    : ''}

  </div>
);

export const CurriculumView = connect(mapStateToProps, mapDispatchToProps)(CurriculumPresenter);
